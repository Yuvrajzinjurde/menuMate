"use strict";
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
    const result = order_service_1.default.addOrder(req.body);
    if (result)
        res.send(new responseHandler_1.responseHandler(result));
});
exports.default = new routes_types_1.Route("/order", orderRouter);
