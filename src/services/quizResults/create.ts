import { QuizResults, QuizResultsSchema, createQuizResultsDto } from "../../entities";
import { Collection, getModel } from "../../constants-definitions";

export const createQuizResultsService = async (data: createQuizResultsDto): Promise<QuizResults | Error> => {
  const model = await getModel(Collection.QUIZRESULTS, QuizResultsSchema);
  const quiz = await model.findOne({ email: data.email });
  if (quiz) {
    return new Error("The quiz already exists");
  }
  const newQuiz = new model(data);
  await newQuiz.save();
  return { ...newQuiz._doc };
};
