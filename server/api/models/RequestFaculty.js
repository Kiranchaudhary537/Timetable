const mongoose = require("mongoose");

const RequestFacultyRoleSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    updatedAt: {
      type: Date,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const RequestFacultyRole = mongoose.model(
  "Requestrole",
  RequestFacultyRoleSchema
);
module.exports = RequestFacultyRole;
