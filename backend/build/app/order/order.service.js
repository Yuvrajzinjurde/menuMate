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
exports.updateOrderStatus = exports.getRequirements = exports.getAllActiveOrders = exports.calculateTotalPriceAndTime = exports.addOrder = void 0;
const order_repo_1 = __importDefault(require("./order.repo"));
const order_responses_1 = require("./order.responses");
const addOrder = (order) => {
    try {
        const { averageTime, totalPrice } = (0, exports.calculateTotalPriceAndTime)(order.items);
        order.totalPrice = totalPrice;
        order.averageTimeNeeded = averageTime;
        const newOrder = order_repo_1.default.addOrder(order);
        if (!newOrder)
            throw order_responses_1.orderResponses.ERROR_ON_INTERTING_ORDER;
        return newOrder;
    }
    catch (e) {
        throw order_responses_1.orderResponses.ERROR_ON_INTERTING_ORDER;
    }
};
exports.addOrder = addOrder;
const calculateTotalPriceAndTime = (items) => {
    try {
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
    }
    catch (e) {
        throw e;
    }
};
exports.calculateTotalPriceAndTime = calculateTotalPriceAndTime;
const getAllActiveOrders = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = (0, exports.getRequirements)(req);
        const activeOrdersArray = yield order_repo_1.default.getAllActiveOrders(query);
        if (!activeOrdersArray)
            order_responses_1.orderResponses.NO_ORDERS_FOUND;
        const activeOrders = activeOrdersArray.map((order) => order.orderId);
        return activeOrders;
    }
    catch (e) {
        throw e;
    }
});
exports.getAllActiveOrders = getAllActiveOrders;
const getRequirements = (req) => {
    try {
        if (req === "getallactive")
            return { isActive: true };
        if (req === "getunassigned")
            return { $and: [{ isActive: true }, { isAssigned: false }] };
        if (req === "getassigned")
            return { $and: [{ isActive: true }, { isAssigned: true }] };
        throw order_responses_1.orderResponses.BAD_REQUEST_PARAMS;
    }
    catch (e) {
        throw order_responses_1.orderResponses.BAD_REQUEST_PARAMS;
    }
};
exports.getRequirements = getRequirements;
const updateOrderStatus = (orderId, updatedFields) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updates = {
            orderId,
            updatedFields,
        };
        const isUpdated = yield order_repo_1.default.updateOrderStatus(updates);
        return isUpdated;
    }
    catch (e) {
        throw e;
    }
});
exports.updateOrderStatus = updateOrderStatus;
exports.default = {
    addOrder: exports.addOrder,
    getAllActiveOrders: exports.getAllActiveOrders,
    calculateTotalPriceAndTime: exports.calculateTotalPriceAndTime,
    updateOrderStatus: exports.updateOrderStatus,
};
