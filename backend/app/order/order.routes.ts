import { Router } from "express";
import { Route } from "../routes/routes.types";
import {
  orderValidations,
  updateValidations,
  getOrderValidations,
} from "./order.validations";
import orderService from "./order.service";
import { responseHandler } from "../utility/responseHandler";

const orderRouter = Router();

orderRouter.post("/neworder", ...orderValidations, (req, res, next) => {
  try {
    const result = orderService.addOrder(req.body);
    res.send(new responseHandler(result));
  } catch (e) {
    next(e);
  }
});

orderRouter.get(
  "/getorders/:getreq",
  ...getOrderValidations,
  async (req, res, next) => {
    try {
      const result = await orderService.getAllActiveOrders(req.params.getreq);
      res.send(new responseHandler(result));
    } catch (e) {
      next(e);
    }
  }
);

orderRouter.put(
  "/update-status/:order_id",
  ...updateValidations,
  async (req, res, next) => {
    try {
      const orderId = req.params.order_id;
      const updatedFields = req.body;
      const result = await orderService.updateOrderStatus(
        orderId,
        updatedFields
      );
      res.send(new responseHandler(result));
    } catch (e) {
      next(e);
    }
  }
);

export default new Route("/orders", orderRouter);
