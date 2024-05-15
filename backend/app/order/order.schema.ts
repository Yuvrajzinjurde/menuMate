import { Schema, model } from "mongoose";
import { boolean } from "zod";

const order_Schema = new Schema({
  tableNumber: {
    type: Number,
    required: true,
  },
  items: [
    {
      itemId: {
        type: Schema.Types.ObjectId,
        ref: "menuSchema",
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      averageCookingTime: {
        type: Number,
        require: true,
      },
    },
  ],
  averageTimeNeeded: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  totalPrice: {
    type: Number,
    // required: true,
  },
  isPaid: {
    type: Boolean,
    default: false,
  },
});

const order_status = new Schema({
  orderId: {
    type: Schema.Types.ObjectId,
    ref: "orderSchema",
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  preparingStaff: {
    type: Schema.Types.ObjectId,
  },
  isAssigned: {
    type: Boolean,
    default: false,
  },
});
const orderStatus = model("orderStatus", order_status);
const orderSchema = model("orderSchema", order_Schema);
export default {
  orderSchema,
  orderStatus,
};
