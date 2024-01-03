interface QuestionResult {
  question_id: string;
  user_answer: string;
  correct_answer: string;
}

export interface QuizResults {
  quiz_result_id: string;
  quiz_id: string;
  email: string;
  results: QuestionResult[];
}
