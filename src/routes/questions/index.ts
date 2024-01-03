import { RouteOptions } from "fastify";
import { createQuestionRoute } from "./create";
import { QuestionsListRoute } from "./list";

export const questionsRoutes: RouteOptions[] = [createQuestionRoute, QuestionsListRoute];
