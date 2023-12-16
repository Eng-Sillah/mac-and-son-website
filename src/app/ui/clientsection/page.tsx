import styles from "./clientsection.module.css"
import { FaQuoteLeft } from "react-icons/fa";

export default function ClientSection() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
            <h1 className={styles.title}>Our Happy Clients!</h1>
            <hr className={styles.hr} />
            <div className={styles.testimoniaComtainer}>
                <div className={styles.card}>
                    <div className={styles.icons}>
                    <FaQuoteLeft className={styles.icon} />
                    </div>
                    <p className={styles.message}>Elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Nam varius consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elelit tellus.</p>
                    <p>⭐⭐⭐⭐⭐</p>
                    <hr className={styles.hrclient} />
                    <div className={styles.users}>
                        <div className={styles.userImage}></div> <span className={styles.username}>Jonethan</span> 
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.icons}>
                        <FaQuoteLeft className={styles.icon} />
                    </div>
                    <p className={styles.message}>Elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Nam varius consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elelit tellus.</p>
                    <p>⭐⭐⭐⭐⭐</p>
                    <hr className={styles.hrclient} />
                    <div className={styles.users}>
                        <div className={styles.userImage}></div> <span className={styles.username}>Jonethan</span> 
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.icons}>
                    <FaQuoteLeft className={styles.icon} />
                    </div>
                    <p className={styles.message}>Elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Nam varius consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elelit tellus.</p>
                    <p>⭐⭐⭐⭐⭐</p>
                    <hr className={styles.hrclient} />
                    <div className={styles.users}>
                        <div className={styles.userImage}></div> <span className={styles.username}>Jonethan</span> 
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}