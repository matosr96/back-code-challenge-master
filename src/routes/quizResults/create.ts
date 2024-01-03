import { RouteOptions } from "fastify";
import { HttpMethod } from "../../constants-definitions";
import { createQuizResultsDto } from "../../entities";
import { createQuizResultsService } from "../../services";

export const createQuizResultsRoute: RouteOptions = {
  method: HttpMethod.POST,
  url: "/quiz-results",
  handler: async (request, reply) => {
    const data = request.body as createQuizResultsDto;
    try {
      const quiz = await createQuizResultsService(data);
      reply.status(200).send(quiz);
    } catch (err) {
      console.log(err);
      reply.status(500).send(err);
    }
  },
};
