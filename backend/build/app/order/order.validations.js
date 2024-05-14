"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderValidations = void 0;
const validator_1 = require("../utility/validator");
const order_types_1 = require("./order.types");
exports.orderValidations = [
    (0, validator_1.body)(order_types_1.orderSchema)
];
