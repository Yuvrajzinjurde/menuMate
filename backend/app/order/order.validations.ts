import { body } from "../utility/validator";
import { orderSchema } from "./order.types";

export const orderValidations = [
    body(orderSchema)
]