import { Schema } from "mongoose";
import { User } from "./user";
import crypto from "crypto";

export const UserSchemaMongo = new Schema<User>(
  {
    user_id: {
      type: String,
      required: true,
      unique: true,
      default: () => crypto.randomUUID(),
    },
    name: { type: String },
    email: { type: String },
    password: { type: String },
    photo: { type: String },
    phone: { type: String },
    status: { type: String, default: "active" },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
