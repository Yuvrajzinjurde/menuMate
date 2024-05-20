"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const menu_routes_1 = __importDefault(require("../menu/menu.routes"));
const order_routes_1 = __importDefault(require("../order/order.routes"));
exports.routes = [menu_routes_1.default, order_routes_1.default];
