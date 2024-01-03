import { Question } from "./models";

export type createQuestionDto = Omit<Question, "question_id" | "id">;
export type partialQuestionDto = Partial<Question>;
