import { RouteOptions } from "fastify";
import { HttpMethod } from "../../constants-definitions";
import { partialQuizDto } from "../../entities";
import { updateQuiz } from "../../services";

export const updateQuizRoute: RouteOptions = {
  method: HttpMethod.PUT,
  url: "/quizzes",
  handler: async (request, reply) => {
    const data = request.body as partialQuizDto;
    try {
      const result = await updateQuiz(data);
      reply.status(200).send(result);
    } catch (err) {
      console.log(err);
      reply.status(500).send(err);
    }
  },
};
