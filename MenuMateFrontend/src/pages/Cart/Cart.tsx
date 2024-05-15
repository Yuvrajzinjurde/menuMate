
import { Button } from '../../components/Button/Button';
import styles from './cart.module.scss';


export default function Cart({cart}:CartProps){


    return <div className={styles.Cart}>
        <h2>Your Order Details </h2>
        {/* {cart.map((item,i)=>{
            return<div key={i} className={styles.cartItem}>
             
                <h2>{item.name}</h2>
                <h4>{item.price}</h4>
            </div>
        })} */}
        <div className={styles.BtnContainer}>
            <Button text="Pay Now" onclick={()=>console.log('Pay Now')}/>
            <Button text="Pay Later" onclick={()=>console.log('Pay Later')}/>
        </div>
       
    </div>
}