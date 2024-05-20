import menuRepo from "./menu.repo";
import { menuResponses } from "./menuResponses";

export const getMenu = async () => {
  try {
    const menu = await menuRepo.getMenu();
    if (!menu) throw menuResponses.NO_MENU_FOUND;
    return menu;
  } catch (e) {
    throw menuResponses.NO_MENU_FOUND;
  }
};

export default {
  getMenu,
};
