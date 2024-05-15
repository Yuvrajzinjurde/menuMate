import Cart from "../pages/Cart/Cart";
import Main from "../pages/Main/main";

export interface Route {
    path: string;
    component: React.ComponentType<any>;
  }
export const routes:Route[] = [
    { path: '/', component:Main },
    { path: '/cart', component: Cart },
  
  ];