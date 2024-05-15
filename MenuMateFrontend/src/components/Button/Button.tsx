import styles from './button.module.scss'


interface ButtonProps{

    text:string;
    onclick:any;
}


export const Button=({text,onclick}:ButtonProps)=>{
    return <button className={styles.Button} onClick={onclick}>{text}</button>
}

 