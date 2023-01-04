import express, { Express, Request, Response } from 'express';

import { helloWorld } from './hello-world';

export const app: Express = express();
const greet = helloWorld();

app.get("/", (req: Request, res: Response) => {
  return res
    .status(200)
    .send(greet);
})
