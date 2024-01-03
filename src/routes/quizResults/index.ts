import { RouteOptions } from "fastify";
import { createQuizResultsRoute } from "./create";
import { updateQuizResultRoute } from "./update";
import { deleteQuizResultRoute } from "./delete";
import { QuizzesResultsListRoute } from "./list";
import { getQuizResultByIdRoute } from "./get-by-id";

export const quizzResultsRoutes: RouteOptions[] = [
  createQuizResultsRoute,
  updateQuizResultRoute,
  deleteQuizResultRoute,
  QuizzesResultsListRoute,
  getQuizResultByIdRoute
];
