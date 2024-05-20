import { Schema, model } from "mongoose";


const menuItemSchema = new Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    price:
    {
        type: Number,
        required: true
    },
    picture: {
        type: String
    },
    recipe: { type: String }
})

const menuSchema = model('menuItems',menuItemSchema);

export default menuSchema;