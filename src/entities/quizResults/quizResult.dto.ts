import { QuizResults } from "./models";

export type createQuizResultsDto = Omit<QuizResults, "quiz_result_id" | "id">;
export type partialQuizResultsDto = Partial<QuizResults>;