import axios from "axios";
import styles from "./card.module.scss";
import { useEffect, useState } from "react";
import { Button } from "../Button/Button";

interface CardProps {
  id: string;
  name: string;
  desc: string;
  price:number;
  picture:string;
  onclick:(id:string)=>void;

}

export default function Card({id,name,desc,price,picture,onclick}: CardProps) {


  return (
    <div className={styles.Card}>
      <img src={picture} alt="image here" height={250} width={350}></img>
      <h1>{name}</h1>
      <p>
       {desc}
      </p>
      <h3>Rs {price}</h3>
      <div className={styles.BtnContainer}>
       <Button text="Add to cart" onclick={()=>onclick(id)}></Button>
      </div>
    </div>
  );
}
