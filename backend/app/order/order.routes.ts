import { Request, Router } from "express";
import { Route } from "../routes/routes.types";
import { orderValidations } from "./order.validations";
import orderService from "./order.service";
import { responseHandler } from "../utility/responseHandler";
import { getAllActiveOrders } from "./order.repo";

const orderRouter = Router();

orderRouter.post("/neworder", ...orderValidations, (req, res, next) => {
  try {
    const result = orderService.addOrder(req.body);
    res.send(new responseHandler(result));
  } catch (e) {
    next(e);
  }
});

orderRouter.get("/getorders/:getreq", async (req, res, next) => {
  try {
    const result = await orderService.getAllActiveOrders(
      req.params.getreq.toString()
    );
    res.send(new responseHandler(result));
  } catch (e) {
    next(e);
  }
});

orderRouter.put("/update-status/:orderId", async (req, res, next) => {
  try {
    const result = await orderService.updateOrderStatus(req);
    res.send(new responseHandler(result));
  } catch (e) {
    next(e);
  }
});

export default new Route("/orders", orderRouter);
