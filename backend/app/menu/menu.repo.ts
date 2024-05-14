import menuSchema from "./menu.schema";

export const getMenu = async () =>{
    const menu =  await menuSchema.find({});
    return menu;
}

export default{
    getMenu
}