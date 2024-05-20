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
  NO_ORDERS_FOUND: {
    statusCOde: 401,
    message: "ORDERS NOT FOUND",
  },
  BAD_REQUEST_PARAMS: {
    statusCOde: 400,
    message: "BAD REQUEST FROM PARAMS",
  },
  ORDER_UPDATED: {
    statusCOde: 200,
    message: "ORDER UPDATED SUCCESSFULLY",
  },
};
