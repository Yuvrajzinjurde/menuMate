"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateValidations = exports.getOrderValidations = exports.orderValidations = void 0;
const validator_1 = require("../utility/validator");
const order_types_1 = require("./order.types");
exports.orderValidations = [(0, validator_1.body)(order_types_1.orderSchema)];
exports.getOrderValidations = [(0, validator_1.params)(order_types_1.getOrderParamValidations)];
exports.updateValidations = [
    (0, validator_1.params)(order_types_1.paramValidationSchema),
    (0, validator_1.body)(order_types_1.updateStatusSchema, true),
];
