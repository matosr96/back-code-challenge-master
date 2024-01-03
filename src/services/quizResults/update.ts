import { Collection, getModel } from "../../constants-definitions";
import {
  QuizResults,
  QuizResultsSchema,
  partialQuizResultsDto,
} from "../../entities";

export const updateQuizResult = async (
  data: partialQuizResultsDto
): Promise<QuizResults | Error> => {
  console.log(data)
  const model = await getModel(Collection.QUIZRESULTS, QuizResultsSchema);
  const quiz = await model.findOne({ quiz_result_id: data.quiz_result_id });
  if (!quiz) {
    return new Error("Could not update quiz result");
  }
  const newQuiz = { ...data };
  await quiz.updateOne(newQuiz);
  return { ...quiz.doc };
};
