import { useEffect, useState } from "react";
import { Header } from "../../components/Header/header";
import Cart from "../Cart/Cart";
import MenuList from "../MenuList/MenuList";
import axios from "axios";

export default function Main(){

    const [menu, setMenu] = useState<Menu[]>([]);
    const [cart, setCart] = useState<CartItem[]>([]);
  
    const getMenuList = async () => {
      try {
        const res = await axios.get(
          "https://dc7e-115-160-223-174.ngrok-free.app/menu/getmenu",
          {
            headers: {
              "ngrok-skip-browser-warning": "skip-browser-warning",
            },
          }
        );
        console.log(res.data.data);
        setMenu(res.data.data);
      } catch (error: any) {
        console.error("Error fetching menu list:", error.message);
        return [];
      }
    };
  
    useEffect(() => {
      getMenuList();
    }, []);
  
    const checkoutCart = () => {
      // implement checkout logic
    };
  
    const addtocart = (id: string) => {
      const selectedItem = menu.find((item) => item._id === id);
      if (!selectedItem) {
        console.error(`Item with id ${id} not found`);
        return;
      }
      const cartItem:CartItem= { id: selectedItem._id, name: selectedItem.name, price: selectedItem.price.toString() };
      console.log(selectedItem);
      setCart((prev) => [...prev, cartItem]);
      console.log('cart',cart);
    };
    return<>
     <Header/>
  <MenuList menu={menu} addtocart={addtocart}/>
 </>
}