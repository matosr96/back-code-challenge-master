interface Question {
  question_id: string;
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export interface Quiz {
  quiz_id: string;
  name: string;
  response_code: number;
  results: Question[];
}