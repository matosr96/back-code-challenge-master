import { Quiz, SchemaQuizMongo } from "../../entities";
import { Collection, getModel } from "../../constants-definitions";

export const createQuizService = async (data: Quiz): Promise<Quiz | Error> => {
  const model = await getModel(Collection.QUIZZES, SchemaQuizMongo);
  const quiz = await model.findOne({ name: data.name });
  if (quiz) {
    return new Error("The quiz already exists");
  }
  const newQuiz = new model(data);
  await newQuiz.save();
  return { ...newQuiz._doc };
};
