import { Router } from "express";
import { Route } from "../routes/routes.types";
import menuService from "./menu.service";
import { menuResponses } from "./menuResponses";
import { responseHandler } from "../utility/responseHandler";


const menuRouter = Router();

menuRouter.get('/getmenu',async(req,res,next)=>{
    const menu = await menuService.getMenu()
    res.send(new responseHandler(menu))
})

export default new Route("/menu",menuRouter);