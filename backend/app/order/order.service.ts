import orderRepo from "./order.repo";
import { orderResponses } from "./order.responses";
import { orderSchemaI } from "./order.types";

export const addOrder = (order: orderSchemaI) => {
  try {
    const newOrder = orderRepo.insertOne(order);
    if (!newOrder) throw orderResponses.ERROR_ON_INTERTING_ORDER;
    return orderResponses.ORDER_PLACED;
  } catch (e) {
    throw orderResponses.ERROR_ON_INTERTING_ORDER;
  }
};

export default {
  addOrder,
};
