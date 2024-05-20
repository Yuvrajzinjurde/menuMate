import { Schema, model } from "mongoose";

const orderSchemaa = new Schema({
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
  },
  isPaid: {
    type: Boolean,
    default: false,
  },
});

const orderStatuss = new Schema({
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
const orderStatus = model("orderStatus", orderStatuss);
const orderSchema = model("orderSchema", orderSchemaa);

export default {
  orderSchema,
  orderStatus,
};
