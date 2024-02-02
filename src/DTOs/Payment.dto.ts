import GetRandomString from "../functions/GetRandomString.func";
import PaymentMethod from "../types/PaymentMethod.type";

interface PaymentDto {
  value: number;
  date: string;
  method:PaymentMethod;
}

export default PaymentDto;
