import ChatCon from "./ChatContainer"
import styles from "../Home/Home.module.css";


export default function Base(){


    return(
        <div className={styles.home}>
            <ChatCon />
        </div>
    )
}