import { Schema } from "mongoose";
import { Question } from "./question";
import crypto from "crypto";

export const SchemaQuestionMongo = new Schema<Question>(
  {
    question_id: {
      type: String,
      required: true,
      unique: true,
      default: () => crypto.randomUUID(),
    },
    category: { type: String, required: true },
    type: { type: String, required: true },
    difficulty: { type: String, required: true },
    question: { type: String, required: true },
    correct_answer: { type: String, required: true },
    incorrect_answers: [{ type: String, required: true }],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
