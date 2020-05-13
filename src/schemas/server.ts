import express from 'express';

export interface Request extends express.Request {
  userId: string | undefined;
}
export type Response = express.Response;
