import { menuItemSchemaI } from "../menu/menu.types";
import orderRepo from "./order.repo";
import { orderResponses } from "./order.responses";
import { MenuItemI, OrderI, orderSchemaI } from "./order.types";

export const addOrder = (order: orderSchemaI) => {
  try {
    const { averageTime, totalPrice } = calculateTotalPriceAndTime(order.items);
    order.totalPrice = totalPrice;
    order.averageTimeNeeded = averageTime;

    const newOrder = orderRepo.insertOne(order);

    if (!newOrder) throw orderResponses.ERROR_ON_INTERTING_ORDER;
    return orderResponses.ORDER_PLACED;
  } catch (e) {
    throw orderResponses.ERROR_ON_INTERTING_ORDER;
  }
};
export const calculateTotalPriceAndTime = (items: MenuItemI[]) => {
  let totalPrice = 0;
  let time: number[] = [];

  items.forEach((item) => {
    totalPrice += item.price * item.quantity;
    time.push(item.averageCookingTime);
  });

  let averageTime: number = Math.max(...time) + 10;

  return {
    averageTime,
    totalPrice,
  };
};
export const getAllActiveOrders = async (req: string) => {
  try {
    const query = getRequirements(req);
    const activeOrders = await orderRepo.getAllActiveOrders(query);
    if (!activeOrders) orderResponses.NO_ORDERS_FOUND;
    return activeOrders;
  } catch (e) {
    throw e;
  }
};

export const getRequirements = (req: string) => {
  if (req === "getallactive") return { isActive: true };

  if (req === "getunassigned")
    return { $nd: [{ isActive: true }, { isAssigned: false }] };

  if (req === "getassigned")
    return { $nd: [{ isActive: true }, { isAssigned: true }] };
};

export default {
  addOrder,
  getAllActiveOrders,
  calculateTotalPriceAndTime,
};
