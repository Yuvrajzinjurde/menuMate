"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateStatusSchema = exports.paramValidationSchema = exports.getOrderParamValidations = exports.orderSchema = void 0;
const zod_1 = require("zod");
exports.orderSchema = zod_1.z.object({
    tableNumber: zod_1.z.number().int().positive(),
    items: zod_1.z.array(zod_1.z.object({
        itemId: zod_1.z.string(),
        quantity: zod_1.z.number().int().positive(),
        price: zod_1.z.number().positive(),
        averageCookingTime: zod_1.z.number(),
    })),
    averageTimeNeeded: zod_1.z.number().optional(),
    createdAt: zod_1.z.date().optional(),
    totalPrice: zod_1.z.number().positive().optional(),
    isPaid: zod_1.z.boolean(),
});
exports.getOrderParamValidations = zod_1.z.object({
    getreq: zod_1.z.enum(["getallactive", "getassigned", "getunassigned"]),
});
exports.paramValidationSchema = zod_1.z.object({
    order_id: zod_1.z.string(),
});
exports.updateStatusSchema = zod_1.z.object({
    orderId: zod_1.z.string().optional(),
    isActive: zod_1.z.boolean().optional(),
    preparingStaff: zod_1.z.string().optional(),
    isAssigned: zod_1.z.boolean().optional(),
});
