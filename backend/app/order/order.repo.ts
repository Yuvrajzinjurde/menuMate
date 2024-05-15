import orderSchemaa from "./order.schema";
import { orderSchemaI } from "./order.types";

export const addOrder = (order: orderSchemaI) => {
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
  return activeOrders;
};

export const updateOrderStatus = async (updates: any) => {
  const { orderId, updatedFields } = updates;
  const isUpdated = await orderSchemaa.orderStatus.findOneAndUpdate(
    { orderId },
    { $set: updatedFields }
  );
  console.log(isUpdated);
  return isUpdated;
};

export default {
  addOrder,
  getAllActiveOrders,
  updateOrderStatus,
};
