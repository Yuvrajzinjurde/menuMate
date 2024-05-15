import orderSchemaa from "./order.schema";
import { orderSchemaI } from "./order.types";

export const insertOne = (order: orderSchemaI) => {
  const newOrder = new orderSchemaa.orderSchema(order);
  newOrder.save();

  const newOrderStatus = new orderSchemaa.orderStatus({
    orderId: newOrder._id,
    isPaid: false,
    isActive: true,
    isAssigned: false,
  });

  newOrderStatus.save();
  return newOrder;
};

export const getAllActiveOrders = async (query: any) => {
  const activeOrders = await orderSchemaa.orderStatus
    .find(query)
    .populate("orderId")
    .sort({ createdAt: 1 })
    .exec();
  console.log(activeOrders);

  return activeOrders;
};

export default {
  insertOne,
  getAllActiveOrders,
};
