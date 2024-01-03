import { Collection, getModel } from "../../constants-definitions";
import { QuizResults, QuizResultsSchema } from "../../entities";

export const getQuizResultById = async (
  quiz_result_id: string
): Promise<QuizResults> => {
  const model = getModel(Collection.QUIZRESULTS, QuizResultsSchema);
  const quiz = (await model.findOne({quiz_result_id})) as QuizResults;
  return quiz;
};
