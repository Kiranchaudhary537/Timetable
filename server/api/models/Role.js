const mongoose = require("mongoose");

const RoleSchema = new mongoose.Schema({
  rolename: {
    type: String,
    unique: true,
    required: true,
    enum: ["student", "faculty", "admin","coordinator"],
    default: "student",
  },
  
});

const Role = mongoose.model("Role", RoleSchema);
module.exports = Role;
