import { RouteOptions } from "fastify";
import { HttpMethod } from "../../constants-definitions";
import { QuestionListService } from "../../services";

export const QuestionsListRoute: RouteOptions = {
    method: HttpMethod.GET,
    url: "/questions",
    handler: async (request, reply) => {
      try {
        const questionLists = await QuestionListService();
        reply.status(200).send(questionLists);
      } catch (err) {
        console.log(err);
        reply.status(500).send(err);
      }
    },
  };
  