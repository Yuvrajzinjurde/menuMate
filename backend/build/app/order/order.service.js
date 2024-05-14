"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addOrder = void 0;
const order_repo_1 = __importDefault(require("./order.repo"));
const order_responses_1 = require("./order.responses");
const addOrder = (order) => {
    try {
        const newOrder = order_repo_1.default.insertOne(order);
        if (!newOrder)
            throw order_responses_1.orderResponses.ERROR_ON_INTERTING_ORDER;
        return order_responses_1.orderResponses.ORDER_PLACED;
    }
    catch (e) {
        throw order_responses_1.orderResponses.ERROR_ON_INTERTING_ORDER;
    }
};
exports.addOrder = addOrder;
exports.default = {
    addOrder: exports.addOrder,
};
