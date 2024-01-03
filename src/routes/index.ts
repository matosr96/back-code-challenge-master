import { FastifyInstance, RouteOptions } from "fastify";
import { questionsRoutes } from "./questions";
import { quizzesRoutes } from "./quiz";
import { quizzResultsRoutes } from "./quizResults";

const routes: RouteOptions[] = [
  ...questionsRoutes,
  ...quizzesRoutes,
  ...quizzResultsRoutes,
];

export const registerRoutes = (fastify: FastifyInstance) => {
  fastify.log.warn("Registering routes", routes);

  routes.map((route) => {
    fastify.route(route);
  });
};
