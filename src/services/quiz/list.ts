import { Collection, getModel } from "../../constants-definitions";
import { Quiz, SchemaQuizMongo } from "../../entities";

export const QuizListService = async ():Promise<Quiz[] | Error> => {
    const model = await getModel(Collection.QUIZZES, SchemaQuizMongo);
    const quizzes = await model.find({}) as Quiz[];
    return quizzes;
}