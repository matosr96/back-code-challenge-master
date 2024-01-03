import { Schema } from "mongoose";
import { QuizResults } from "./quizResults";
import crypto from "crypto";

export const QuizResultsSchema = new Schema<QuizResults>(
  {
    quiz_result_id: {
      type: String,
      required: true,
      unique: true,
      default: () => crypto.randomUUID(),
    },
    quiz_id: { type: String, required: true },
    email: { type: String, required: true },
    results: [
      {
        question_id: { type: String },
        user_answer: { type: String },
        correct_answer: { type: String },
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
