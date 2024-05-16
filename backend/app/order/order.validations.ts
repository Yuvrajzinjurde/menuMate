import { body, params } from "../utility/validator";
import {
  orderSchema,
  paramValidationSchema,
  updateStatusSchema,
  getOrderParamValidations,
} from "./order.types";

export const orderValidations = [body(orderSchema)];

export const getOrderValidations = [params(getOrderParamValidations)];

export const updateValidations = [
  params(paramValidationSchema),
  body(updateStatusSchema, true),
];
