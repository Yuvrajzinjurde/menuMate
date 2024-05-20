"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const menuItemSchema = zod_1.z.object({
    name: zod_1.z.string(),
    description: zod_1.z.string().optional(),
    price: zod_1.z.number().positive().int(),
    picture: zod_1.z.string().optional(),
    recipe: zod_1.z.string().optional()
});
exports.default = {};
