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
exports.getAllActiveOrders = exports.insertOne = void 0;
const order_schema_1 = __importDefault(require("./order.schema"));
const insertOne = (order) => {
    const newOrder = new order_schema_1.default.orderSchema(order);
    newOrder.save();
    const newOrderStatus = new order_schema_1.default.orderStatus({
        orderId: newOrder._id,
        isPaid: false,
        isActive: true,
        isAssigned: false,
    });
    newOrderStatus.save();
    return newOrder;
};
exports.insertOne = insertOne;
const getAllActiveOrders = (query) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log("we are here");
    // const activeOrders = await orderSchemaa.orderStatus.find({ isActive: true });
    // .find({ $nd: [{ isActive: true }] })
    const activeOrders = yield order_schema_1.default.orderStatus
        .find(query)
        .populate("orderId")
        .exec();
    console.log(activeOrders);
    return activeOrders;
});
exports.getAllActiveOrders = getAllActiveOrders;
exports.default = {
    insertOne: exports.insertOne,
    getAllActiveOrders: exports.getAllActiveOrders,
};
