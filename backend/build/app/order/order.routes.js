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
const express_1 = require("express");
const routes_types_1 = require("../routes/routes.types");
const order_validations_1 = require("./order.validations");
const order_service_1 = __importDefault(require("./order.service"));
const responseHandler_1 = require("../utility/responseHandler");
const orderRouter = (0, express_1.Router)();
orderRouter.post("/neworder", ...order_validations_1.orderValidations, (req, res, next) => {
    try {
        const result = order_service_1.default.addOrder(req.body);
        res.send(new responseHandler_1.responseHandler(result));
    }
    catch (e) {
        next(e);
    }
});
orderRouter.get("/getorders/:getreq", ...order_validations_1.getOrderValidations, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield order_service_1.default.getAllActiveOrders(req.params.getreq);
        res.send(new responseHandler_1.responseHandler(result));
    }
    catch (e) {
        next(e);
    }
}));
orderRouter.put("/update-status/:order_id", ...order_validations_1.updateValidations, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderId = req.params.order_id;
        const updatedFields = req.body;
        const result = yield order_service_1.default.updateOrderStatus(orderId, updatedFields);
        res.send(new responseHandler_1.responseHandler(result));
    }
    catch (e) {
        next(e);
    }
}));
exports.default = new routes_types_1.Route("/orders", orderRouter);
