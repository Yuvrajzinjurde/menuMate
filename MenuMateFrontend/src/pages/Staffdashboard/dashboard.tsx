import { useEffect, useState } from "react";
import { Button } from "../../components/Button/Button";
import OrderItem from "../../components/OrderItem/orderItem";
import styles from "./dashboard.module.scss";
import { DashboardProps } from "./dashboard.types";
import { getUnassigned, getassigned } from "../../services/getdata";

import { Order } from "../Cart/cart.types";

export default function Dashboard({ menu,GotoPage }: DashboardProps) {

  const [Orders, setOrders] = useState<Order[]>([]);
  const [AssignedOrders, setAssignedOrders] = useState<any[]>([]); //to get all unassigned orders
  const [newOrder, setNewOrder] = useState<Boolean>(true);

  const getUnassignedOrders = async () => {
    try {
      const unassignedOrders = await getUnassigned();
   
      setOrders(unassignedOrders)
    } catch (error) {
      console.error('Error:', error);
    }
  };



  const getassignedOrders = async () => {
    try {
      const assignedOrders = await getassigned();
   
      setAssignedOrders(assignedOrders)
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  useEffect(() => {
    getassignedOrders();
  }, [AssignedOrders]);
  useEffect(() => {
    getUnassignedOrders();
  }, [Orders]);



  return (
    <div className={styles.Dashboard}>
     <Button text="<-" onclick={()=>GotoPage('main')}/> <h1 className={styles.heading}>ALL ORDERS</h1> 
      <div className={styles.Tabs}>
        <Button text="New Orders" onclick={() => setNewOrder(true)} />
        <Button text="Started Orders" onclick={() => setNewOrder(false)} />
      </div>
      {newOrder && (
        <div className={styles.AllOrders}>
          {Orders.map((order) =>(
           
            <OrderItem menu={menu} orderId={order._id} order={order} status="Start" onOrderStatusChange={getassignedOrders} />
          ))}
        </div>
      )}
      {newOrder === false && (
        <div className={styles.AllOrders}>
          {AssignedOrders.map((order) => (
            <OrderItem menu={menu} orderId={order._id} order={order} status="Complete" onOrderStatusChange={getUnassignedOrders}/>
          ))}
        </div>
      )}
    </div>
  );
}
