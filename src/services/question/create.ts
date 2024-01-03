import {
  Question,
  SchemaQuestionMongo,
  createQuestionDto,
} from "../../entities";
import { Collection, getModel } from "../../constants-definitions";

export const createQuestionsService = async (
  data: createQuestionDto
): Promise<Question | Error> => {
  const model = await getModel(Collection.QUESTIONS, SchemaQuestionMongo);
  const question = await model.findOne({ question: data.question });
  if (question) {
    return new Error("The question already exists");
  }
  const newQuestion = new model(data);
  await newQuestion.save();
  return { ...newQuestion._doc };
};
