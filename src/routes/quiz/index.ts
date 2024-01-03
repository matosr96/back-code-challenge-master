import { RouteOptions } from "fastify";
import { createQuizRoute } from "./create";
import { QuizzesListRoute } from "./list";
import { deleteQuizRoute } from "./delete";
import { updateQuizRoute } from "./update";

export const quizzesRoutes: RouteOptions[] = [
  createQuizRoute,
  QuizzesListRoute,
  deleteQuizRoute,
  updateQuizRoute
];
