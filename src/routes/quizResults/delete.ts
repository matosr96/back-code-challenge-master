import { RouteOptions } from "fastify";
import { HttpMethod } from "../../constants-definitions";
import { deleteQuizResult } from "../../services";

interface Params {
  quiz_result_id: string;
}

export const deleteQuizResultRoute: RouteOptions = {
  method: HttpMethod.DELETE,
  url: "/quiz-results/:quiz_result_id",
  handler: async (request, reply) => {
    const { params } = request;
    const { quiz_result_id } = params as Params;
    try {
      const result = await deleteQuizResult(quiz_result_id);
      reply.status(200).send(result);
    } catch (err) {
      console.log(err);
      reply.status(500).send(err);
    }
  },
};
