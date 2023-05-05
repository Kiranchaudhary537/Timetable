const express = require("express");
const RequestFacultyRole = require("../../models/RequestFaculty");
const User = require("../../models/User");

const getRequestRole = async (req, res) => {
  try {
    const requests = await RequestFacultyRole.find();
    res.status(200).send(requests);
  } catch (error) {
    console.log(error);
    res.status(400).send("Error occurred while fetching request data.");
  }
};

const updateRole = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.role = "FACULTY";
    await user.save();

    res.status(200).json({ message: "User role updated" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const deleteUserByEmail = async (req, res) => {
  const email = req.params.email;
  try {
    const deletedUser = await RequestFacultyRole.findOneAndDelete({ email });
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Error occurred while deleting user" });
  }
};

const getRequestFacultyRole = express.Router();
getRequestFacultyRole.route("/").get(getRequestRole);
getRequestFacultyRole.route("/updateRole").post(updateRole);
getRequestFacultyRole.route("/:email").delete(deleteUserByEmail);
module.exports = getRequestFacultyRole;
