const mongoose = require("mongoose");

const RoleSchema = new mongoose.Schema({
  rolename: {
    type: String,
    unique: true,
  },
  permission: [
    {
      role: String,
      id: { type: mongoose.Schema.Types.ObjectId, ref: "Permission" },
    },
  ],
});

const Role = mongoose.model("Role", RoleSchema);
module.exports = Role;
