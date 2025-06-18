// Admin model - admin user schema and database operations

import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  adminId: { type: String, required: true, unique: true },
  role: { type: String, required: true },
  permissions: [{ type: String }],
  department: { type: String },
});

const Admin = mongoose.model("Admin", adminSchema);
export default Admin;
