import { Quiz } from "./models";

export type createQuizDto = Omit<Quiz, "uuid" | "id">;
export type partialQuizDto = Partial<Quiz>;
