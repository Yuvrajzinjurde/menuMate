import { useEffect, useState } from "react";
import { Button } from "../../components/Button/Button";
import { Order } from "../Cart/cart.types";
import { getAllactive } from "../../services/getdata";
import OrderItem from "../../components/OrderItem/orderItem";
import  styles  from './maindashboard.module.scss'
import { Header } from "../../components/Header/header";




export default function MainDashboard({ menu, GotoPage }: MainDashboardProps) {
  const [Orders, setOrders] = useState<Order[]>([]);
  const getAllactiveOrders = async () => {
    try {
      const unassignedOrders = await getAllactive();
      console.log(unassignedOrders);
      setOrders(unassignedOrders);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  useEffect(() => {
    getAllactiveOrders();
  }, []);

  return (
    <>
    <Header/>
      <Button text="<-" onclick={()=>{console.log('maindashboard'); GotoPage("login")}} />{" "}
      <h1 className={styles.Heading}>ALL ORDERS </h1>
      
      {Orders.map((order) => (
        <OrderItem
          menu={menu}
          orderId={order._id}
          order={order}
          status="Start"
          onOrderStatusChange={getAllactiveOrders}
        />
      ))}
    </>
  );
}
