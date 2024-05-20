"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const menuItemSchema = new mongoose_1.Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        required: true
    },
    picture: {
        type: String
    },
    recipe: { type: String }
});
const menuSchema = (0, mongoose_1.model)('menuItems', menuItemSchema);
exports.default = menuSchema;
