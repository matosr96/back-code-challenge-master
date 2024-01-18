import { RouteOptions } from "fastify";
import { HttpMethod } from "../../constants-definitions";
import { GetBySlugQuizService } from "../../services/quiz/get-by-slug";

export const QuizBySlugRoute: RouteOptions = {
  method: HttpMethod.GET,
  url: "/quiz-by-slug/:slug",
  handler: async (request, reply) => {
    try {
      const { params } = request;
      const { slug } = params as { slug: string };
      const quizzes = await GetBySlugQuizService(slug);
      reply.status(200).send(quizzes);
    } catch (err) {
      console.log(err);
      reply.status(500).send(err);
    }
  },
};
