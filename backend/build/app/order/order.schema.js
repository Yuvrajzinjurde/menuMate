"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const order_Schema = new mongoose_1.Schema({
    tableNumber: {
        type: Number,
        required: true,
    },
    items: [
        {
            itemId: {
                type: mongoose_1.Schema.Types.ObjectId,
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
const order_status = new mongoose_1.Schema({
    orderId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "orderSchema",
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    preparingStaff: {
        type: mongoose_1.Schema.Types.ObjectId,
    },
    isAssigned: {
        type: Boolean,
        default: false,
    },
});
const orderStatus = (0, mongoose_1.model)("orderStatus", order_status);
const orderSchema = (0, mongoose_1.model)("orderSchema", order_Schema);
exports.default = {
    orderSchema,
    orderStatus,
};
