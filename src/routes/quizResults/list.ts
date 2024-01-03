import { RouteOptions } from "fastify";
import { HttpMethod } from "../../constants-definitions";
import { QuizListService, QuizResultListService } from "../../services";

export const QuizzesResultsListRoute: RouteOptions = {
  method: HttpMethod.GET,
  url: "/quiz-results",
  handler: async (request, reply) => {
    try {
      const quizzes = await QuizResultListService();
      reply.status(200).send(quizzes);
    } catch (err) {
      console.log(err);
      reply.status(500).send(err);
    }
  },
};
