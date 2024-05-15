"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRequirements = exports.getAllActiveOrders = exports.calculateTotalPriceAndTime = exports.addOrder = void 0;
const order_repo_1 = __importDefault(require("./order.repo"));
const order_responses_1 = require("./order.responses");
const addOrder = (order) => {
    try {
        const { averageTime, totalPrice } = (0, exports.calculateTotalPriceAndTime)(order.items);
        order.totalPrice = totalPrice;
        order.averageTimeNeeded = averageTime;
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
const calculateTotalPriceAndTime = (items) => {
    let totalPrice = 0;
    let time = [];
    items.forEach((item) => {
        totalPrice += item.price * item.quantity;
        time.push(item.averageCookingTime);
    });
    let averageTime = Math.max(...time) + 10;
    return {
        averageTime,
        totalPrice,
    };
};
exports.calculateTotalPriceAndTime = calculateTotalPriceAndTime;
const getAllActiveOrders = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = (0, exports.getRequirements)(req);
        const activeOrders = yield order_repo_1.default.getAllActiveOrders(query);
        if (!activeOrders)
            order_responses_1.orderResponses.NO_ORDERS_FOUND;
        return activeOrders;
    }
    catch (e) {
        throw e;
    }
});
exports.getAllActiveOrders = getAllActiveOrders;
const getRequirements = (req) => {
    if (req === "getallactive")
        return { isActive: true };
    if (req === "getunassigned")
        return { $nd: [{ isActive: true }, { isAssigned: false }] };
    if (req === "getassigned")
        return { $nd: [{ isActive: true }, { isAssigned: true }] };
};
exports.getRequirements = getRequirements;
exports.default = {
    addOrder: exports.addOrder,
    getAllActiveOrders: exports.getAllActiveOrders,
    calculateTotalPriceAndTime: exports.calculateTotalPriceAndTime,
};
