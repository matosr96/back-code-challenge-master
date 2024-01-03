import { Collection, getModel } from "../../constants-definitions";
import { Quiz, SchemaQuizMongo, partialQuizDto } from "../../entities";

export const updateQuiz = async (
  data: partialQuizDto
): Promise<Quiz | Error> => {
  const model = await getModel(Collection.QUIZZES, SchemaQuizMongo);
  const quiz = await model.findOne({ quiz_id: data.quiz_id });
  if (!quiz) {
    return new Error("Could not update quiz");
  }
  const newQuiz = { ...data };
  await quiz.updateOne(newQuiz);
  return { ...quiz.doc };
};
