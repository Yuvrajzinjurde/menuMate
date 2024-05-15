import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import styles from "./MenuList.module.scss";
import axios from "axios";
import { Button } from "../../components/Button/Button";



export default function MenuList({menu,addtocart}:MenuProps) {
 

  return (
    <div className={styles.MenuListMain}>
      <h1>Showing You the list of Tastes to choose from</h1>
      <a href='/cart'><Button text="Cart" onclick={addtocart} /></a>
      <div className={styles.Allmenu}>
        {menu.map((each) => (
          <Card
            key={each._id}
            id={each._id}
            name={each.name}
            desc={each.description}
            picture={each.picture}
            price={each.price}
            onclick={addtocart}
          />
        ))}
      </div>
    </div>
  );
}