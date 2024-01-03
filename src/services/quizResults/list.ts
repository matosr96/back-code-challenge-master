import { Collection, getModel } from "../../constants-definitions";
import { QuizResults, QuizResultsSchema } from "../../entities";

export const QuizResultListService = async (): Promise<
  QuizResults[] | Error
> => {
  const model = await getModel(Collection.QUIZRESULTS, QuizResultsSchema);
  const quizzes = (await model.find({})) as QuizResults[];
  return quizzes;
};
