import { RouteOptions } from "fastify";
import { HttpMethod } from "../../constants-definitions";
import { createQuizDto } from "../../entities";
import { createQuizService } from "../../services";

export const createQuizRoute: RouteOptions = {
  method: HttpMethod.POST,
  url: "/quizzes",
  handler: async (request, reply) => {
    const data = request.body as createQuizDto;
    try {
      const quiz = await createQuizService(data);
      reply.status(200).send(quiz);
    } catch (err) {
      console.log(err);
      reply.status(500).send(err);
    }
  },
};
