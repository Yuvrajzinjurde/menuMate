import orderSchema from "./order.schema";
import { orderSchemaI } from "./order.types";

export const insertOne = (order: orderSchemaI) => {
  const newOrder = new orderSchema.orderSchema(order);
  newOrder.save();

  const newOrderStatus = new orderSchema.orderStatus({
    orderId: newOrder._id,
    isPaid: false,
    isActive: true,
    isAssigned: false,
  });

  newOrderStatus.save();
  return newOrder;
};

export default {
  insertOne,
};
