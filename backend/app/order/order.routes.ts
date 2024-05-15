import { Request, Router } from "express";
import { Route } from "../routes/routes.types";
import { orderValidations } from "./order.validations";
import orderService from "./order.service";
import { responseHandler } from "../utility/responseHandler";
import { getAllActiveOrders } from "./order.repo";

const orderRouter = Router();

orderRouter.post("/neworder", ...orderValidations, (req, res, next) => {
  const result = orderService.addOrder(req.body);
  if (result) res.send(new responseHandler(result));
});

orderRouter.get("/getorders/:getreq", async (req, res, next) => {
  const result = await orderService.getAllActiveOrders(
    req.params.getreq.toString()
  );

  res.send(new responseHandler(result));
});

orderRouter.put("/update-status/:orderID", (req, res, next) => {
  
});

export default new Route("/order", orderRouter);

//Need to be shifted
