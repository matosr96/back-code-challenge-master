import { RouteOptions } from "fastify";
import { HttpMethod } from "../../constants-definitions";
import { QuizListService } from '../../services';

export const QuizzesListRoute: RouteOptions = {
    method: HttpMethod.GET,
    url: "/quizzes",
    handler: async (request, reply) => {
      try {
        const quizzes = await QuizListService();
        reply.status(200).send(quizzes);
      } catch (err) {
        console.log(err);
        reply.status(500).send(err);
      }
    },
  };
  