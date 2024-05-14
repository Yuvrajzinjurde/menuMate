"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderSchema = void 0;
const zod_1 = require("zod");
exports.orderSchema = zod_1.z.object({
    tableNumber: zod_1.z.number().int().positive(),
    items: zod_1.z.array(zod_1.z.object({
        itemId: zod_1.z.string(),
        quantity: zod_1.z.number().int().positive(),
        price: zod_1.z.number().positive(),
    })),
    createdAt: zod_1.z.date().optional(),
    totalPrice: zod_1.z.number().positive().optional(),
    isPaid: zod_1.z.boolean(),
});
