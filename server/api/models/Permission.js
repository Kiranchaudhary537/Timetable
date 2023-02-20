const mongoose = require("mongoose");

const PermissionSchema = new mongoose.Schema({
  permission: {
    type: String,
    unique: true,
    required: true,
  },
  permissiontypes: [
    {
      type: String,
      enum: ["read", "write", "delete"],
      default: ["read"],
    },
  ],
});

const PermissionModel = mongoose.model("Permission", PermissionSchema);
module.exports = PermissionModel;
