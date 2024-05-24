import { useEffect, useState } from "react";
import styles from './timer.module.scss'
interface TimerProps{
    startTime:number,
    onend:()=>void;

}
export default function Timer({startTime,onend}:TimerProps){
   const [Time,setTime]=useState(startTime);
  const [show,setShow]=useState(true);
   useEffect(()=>{
    
    if(Time<=0){
        onend();
        setShow(false);
    }
    setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      },2000);
   },[Time])

    return (<>{show &&<div className={styles.Timer}><h2>{Time}</h2></div>}</>)
}