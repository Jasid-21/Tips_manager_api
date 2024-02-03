import { Router, Request, Response } from "express";
import PaymentDto from "../DTOs/Payment.dto";
import CustomResponse from "../types/CustomResponse.type";
import { payments } from "../connections/database.connection";

const PaymentRouter = Router();

PaymentRouter.get('/', (req: Request, res: Response) => {
  res.status(200).send(payments);
});

PaymentRouter.post('/', (req: Request, res: Response) => {
  const objs: PaymentDto[] = req.body;
  console.log(objs);
  const failures: PaymentDto[] = [];
  objs.forEach(o => {
    const r = PayTip(o);
    if (!r.success) failures.push(o);
  });

  if (failures.length) {
    res.statusMessage = 'Error haciendo algunos pagos. Por favor validar los datos';
    res.status(400);
    res.send({ payments: failures });

    return;
  }

  res.status(200).send();
});

function PayTip(obj: PaymentDto): CustomResponse {
  const { value, date, method }: PaymentDto = obj;
  if (!value || !date || !method) {
    return { success: false, message: 'Missing information' };
  }

  payments.push(obj);
  return { success: true, message: '' };
}

export default PaymentRouter;
