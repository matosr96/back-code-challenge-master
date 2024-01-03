import { RouteOptions } from "fastify";
import { HttpMethod } from "../../constants-definitions";
import { createQuestionDto } from "../../entities";
import { createQuestionsService } from "../../services";

export const createQuestionRoute: RouteOptions = {
  method: HttpMethod.POST,
  url: "/questions",
  handler: async (request, reply) => {
    const data = request.body as createQuestionDto;
    try {
      const question = await createQuestionsService(data);
      reply.status(200).send(question);
    } catch (err) {
      console.log(err);
      reply.status(500).send(err);
    }
  },
};
