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
const menu_service_1 = __importDefault(require("./menu.service"));
const responseHandler_1 = require("../utility/responseHandler");
const menuRouter = (0, express_1.Router)();
menuRouter.get('/getmenu', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const menu = yield menu_service_1.default.getMenu();
    res.send(new responseHandler_1.responseHandler(menu));
}));
exports.default = new routes_types_1.Route("/menu", menuRouter);