import { RouteOptions } from "fastify";
import { HttpMethod } from "../../constants-definitions";
import { partialQuizResultsDto } from "../../entities";
import { updateQuizResult } from "../../services";

export const updateQuizResultRoute: RouteOptions = {
  method: HttpMethod.PUT,
  url: "/quiz-results",
  handler: async (request, reply) => {
    const data = request.body as partialQuizResultsDto;
    try {
      const result = await updateQuizResult(data);
      reply.status(200).send(result);
    } catch (err) {
      console.log(err);
      reply.status(500).send(err);
    }
  },
};
