import { orderResponsesI } from "./order.types";

export const orderResponses: orderResponsesI = {
  ERROR_ON_INTERTING_ORDER: {
    statusCOde: 500,
    message: "ERROR WHILE INSERTING THE ORDER",
  },
  ORDER_PLACED: {
    statusCOde: 200,
    message: "ORDER PLACED SUCCESSFULLY",
  },
};
