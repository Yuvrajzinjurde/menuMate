interface MenuProps{
menu:Menu[];
addtocart:(id:string)=>void;
}


interface Menu {
    _id: string;
    name: string;
    description: string;
    picture: string;
    price: number;
    recipe: string;
  }
  
  interface CartItem {
    id: string;
    name: string;
    price: string;
  }