import { Collection, getModel } from "../../constants-definitions";
import { QuizResultsSchema } from "../../entities";

export const deleteQuizResult = async (quiz_result_id: string): Promise<Boolean | Error> => {
  const model = getModel(Collection.QUIZRESULTS, QuizResultsSchema);
  const result = await model.findOne({ quiz_result_id });
  if (!result) throw new Error("Could not delete quiz result");
  await result.deleteOne();
  return true;
};
