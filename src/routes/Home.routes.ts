import { Router, Request, Response } from "express";
import { payments } from "../connections/database.connection";

const homeRouter = Router();

homeRouter.get('/', (req: Request, resp: Response) => {
  console.log('Payments: ', payments);
  resp.send();
});

export default homeRouter;
