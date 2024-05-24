import { Button } from "../../components/Button/Button";
import { Header } from "../../components/Header/header";
import styles from './login.module.scss'
interface LoginProps{
    GotoPage:(page:string)=>void;
}
export default function Login({GotoPage}:LoginProps){
    return(
        <>
        <Header/>
        <h2 className={styles.Heading}>TO ORDER CLICK SCAN QR OR IF YOU ARE A CHEF GO TO KITCHEN AND COOK</h2>
        <div className={styles.Login}>
        <Button text="Scan a QR" onclick={()=>GotoPage('home')}/>
        <Button text=" Go to Kitchen" onclick={()=> GotoPage('dashboard')}/>
        </div>
</>
    )
}