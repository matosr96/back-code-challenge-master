import { Collection, getModel } from "../../constants-definitions";
import { Quiz, SchemaQuizMongo } from "../../entities";

export const GetBySlugQuizService = async (
  slug: string
): Promise<Quiz | Error> => {
  const model = await getModel(Collection.QUIZZES, SchemaQuizMongo);
  const quizzes = (await model.findOne({ slug: slug })) as Quiz;
  return quizzes;
};
