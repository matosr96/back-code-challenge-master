import { FastifySchema } from 'fastify';

declare module 'fastify' {
  interface FastifySchema {
    tags?: string[]; 
  }
}