import menuSchema from "./menu.schema";

export const getMenu = async () => await menuSchema.find({});

export default {
  getMenu,
};
