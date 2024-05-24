import { Button } from "../../components/Button/Button";
import { Header } from "../../components/Header/header";
import { CartProps } from "../Cart/cart.types";
import styles from './myOrder.module.scss'
import Timer from "../../components/Timer/timer";
import { useEffect, useState } from "react";



interface MyOrderProps {
  GotoPage: (page: string) => void;
}
export const MyOrder = ({ tableNumber, menu, cart, GotoPage }: CartProps) => {
    const [state,setState]=useState("")
    const [Total,setTotal]=useState(0)
  const cartItemNames = cart.map((item) => {
    const menuItem = menu.find((menu) => menu._id === item.itemId);
  
    return menuItem ? menuItem.name : "";
  });

  function totaltime(){
    cart.map((item,i)=>{
      const time:number=Total+item.averageCookingTime;
    
     setTotal(time);
    }
    )
  }


  return (
    <>
    <Header /> 
    <div className={styles.MyCart}>
      
      <div className={styles.Item}>
      <Button text="<-"onclick={()=>GotoPage('home')}/>
      <h2 className={styles.Heading}>Your Order : Table No. {tableNumber}</h2>
 
        </div>
      
        
      <div  className={styles.cartItem}>
        {cart.map((item, i) => {
      
          return (
          
              <div>
                <h2>{cartItemNames[i]}</h2>
<div className={styles.orderInfo}>
                <span> Price {item.price} </span>
                <span> Quantity : {item.quantity} </span>
                <span className={styles.orderStatus}>  <Timer startTime={item.averageCookingTime} onend={()=>{setState('Your Order is Prepared')}} />{state} 
        
                </span>
             </div>
            </div>
          );
        })}
                </div>
      </div>
    
    </>
  );
};
