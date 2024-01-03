import { Collection, getModel } from "../../constants-definitions";
import { Question, SchemaQuestionMongo } from "../../entities";

export const QuestionListService = async ():Promise<Question[] | Error> => {
    const model = await getModel(Collection.QUESTIONS, SchemaQuestionMongo);
    const questions = await model.find({}) as Question[];
    return questions;
}