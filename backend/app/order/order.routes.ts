import { Router } from "express";
import { Route } from "../routes/routes.types";
import { orderValidations } from "./order.validations";
import orderService from "./order.service";
import { responseHandler } from "../utility/responseHandler";

const orderRouter = Router();

orderRouter.post("/neworder", ...orderValidations, (req, res, next) => {
  const result = orderService.addOrder(req.body);
  if (result) res.send(new responseHandler(result));
});

export default new Route("/order", orderRouter);
