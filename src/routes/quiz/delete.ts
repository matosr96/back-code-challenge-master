import { RouteOptions } from "fastify";
import { HttpMethod } from "../../constants-definitions";
import { deleteQuiz } from "../../services";

interface Params {
  quiz_id: string;
}

export const deleteQuizRoute: RouteOptions = {
  method: HttpMethod.DELETE,
  url: "/quizzes/:quiz_id",
  handler: async (request, reply) => {
    const { params } = request;
    const { quiz_id } = params as Params;
    try {
      const result = await deleteQuiz(quiz_id);
      reply.status(200).send(result);
    } catch (err) {
      console.log(err);
      reply.status(500).send(err);
    }
  },
};
