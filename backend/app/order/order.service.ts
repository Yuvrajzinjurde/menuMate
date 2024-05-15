import orderRepo from "./order.repo";
import { orderResponses } from "./order.responses";
import { MenuItemI, OrderI, orderSchemaI } from "./order.types";
import { Request } from "express";

export const addOrder = (order: orderSchemaI) => {
  try {
    const { averageTime, totalPrice } = calculateTotalPriceAndTime(order.items);
    order.totalPrice = totalPrice;
    order.averageTimeNeeded = averageTime;

    const newOrder = orderRepo.addOrder(order);

    if (!newOrder) throw orderResponses.ERROR_ON_INTERTING_ORDER;
    return newOrder;
  } catch (e) {
    throw orderResponses.ERROR_ON_INTERTING_ORDER;
  }
};

export const calculateTotalPriceAndTime = (items: MenuItemI[]) => {
  try {
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
  } catch (e) {
    throw e;
  }
};
export const getAllActiveOrders = async (req: string) => {
  try {
    const query = getRequirements(req);
    const activeOrdersArray = await orderRepo.getAllActiveOrders(query);
    if (!activeOrdersArray) orderResponses.NO_ORDERS_FOUND;

    const activeOrders = activeOrdersArray.map((order) => order.orderId);
    console.log(activeOrders);

    return activeOrders;
  } catch (e) {
    throw e;
  }
};

export const getRequirements = (req: string) => {
  try {
    if (req === "getallactive") return { isActive: true };

    if (req === "getunassigned")
      return { $and: [{ isActive: true }, { isAssigned: false }] };

    if (req === "getassigned")
      return { $and: [{ isActive: true }, { isAssigned: true }] };

    throw orderResponses.BAD_REQUEST;
  } catch (e) {
    throw orderResponses.BAD_REQUEST;
  }
};

export const updateOrderStatus = async (req: Request) => {
  try {
    const orderId = req.params.orderId;
    const updatedFields = req.body;

    const updates = {
      orderId,
      updatedFields,
    };

    const isUpdated = await orderRepo.updateOrderStatus(updates);
    return isUpdated;
  } catch (e) {
    throw e;
  }
};

export default {
  addOrder,
  getAllActiveOrders,
  calculateTotalPriceAndTime,
  updateOrderStatus,
};
