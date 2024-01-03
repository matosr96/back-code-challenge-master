import { Collection, getModel } from "../../constants-definitions";
import { SchemaQuizMongo } from "../../entities";

export const deleteQuiz = async (quiz_id: string): Promise<Boolean | Error> => {
  const model = getModel(Collection.QUIZZES, SchemaQuizMongo);
  const result = await model.findOne({ quiz_id });
  if (!result) throw new Error("Could not delete quiz");
  await result.deleteOne();
  return true;
};
