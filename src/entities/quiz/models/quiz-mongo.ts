import { Schema } from "mongoose";
import { Quiz } from "./quiz";
import crypto from "crypto";

export const SchemaQuizMongo = new Schema<Quiz>(
  {
    quiz_id: {
      type: String,
      required: true,
      unique: true,
      default: () => crypto.randomUUID(),
    },
    name: { type: String, required: true },
    slug: { type: String, required: true },
    response_code: { type: Number },
    results: [
      {
        question_id: { type: String, default: () => crypto.randomUUID() },
        category: { type: String, required: true },
        type: { type: String, required: true },
        difficulty: { type: String, required: true },
        question: { type: String, required: true },
        correct_answer: { type: String, required: true },
        incorrect_answers: [{ type: String, required: true }],
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
