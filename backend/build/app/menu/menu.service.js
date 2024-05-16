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
exports.getMenu = void 0;
const menu_repo_1 = __importDefault(require("./menu.repo"));
const menuResponses_1 = require("./menuResponses");
const getMenu = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const menu = yield menu_repo_1.default.getMenu();
        if (!menu)
            throw menuResponses_1.menuResponses.NO_MENU_FOUND;
        return menu;
    }
    catch (e) {
        throw menuResponses_1.menuResponses.NO_MENU_FOUND;
    }
});
exports.getMenu = getMenu;
exports.default = {
    getMenu: exports.getMenu,
};
