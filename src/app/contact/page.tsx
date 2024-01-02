import styles from "./contact.module.css"
import Contacts from "../services/contact/page"

export default function Contact() {

    return (
        <div className={styles.mainContainer}>
        <div className={styles.container}>
            <h1 className={styles.h1}>Contact</h1>
        </div>
        <div className={styles.content}>
                <div className={styles.left}>
                    <h1 className={styles.title}>Get in Touch</h1>
                    <hr className={styles.hr} />    
                   <div className={styles.details}>
                    <div className={styles.box}>
                        <p>Phone</p>
                        <h1>+23276711110</h1>
                        <hr className={styles.hr} />
                    </div>
                    <div className={styles.box}>
                        <p>Email</p>
                        <h1>contact@info.com</h1>
                        <hr className={styles.hr} />
                    </div>
                    <div className={styles.box}>
                        <p>Address</p>
                        <h1>123 Fifth Avenue, New York, NY 10160</h1>
                        <hr className={styles.hr} />
                    </div>
                    <div className={styles.box}>
                        <p>Keep In Touch</p>
                        <h1>+23276711110</h1>
                        <hr className={styles.hr} />
                    </div>
                   </div>
                </div>
                <div className={styles.right}>
                    <h1>Message Us</h1>
                    <hr className={styles.hr} />
                    <form action="">
                        <label htmlFor="">Name</label>
                        <div className={styles.inputBox}>
                            <div className={styles.name}>
                                <input type="text" />
                                <label htmlFor="firstname">First</label>
                            </div>
                            <div className={styles.name}>
                                <input type="text" />
                                <label htmlFor="lastname">Last</label>
                            </div>
                        </div>
                        <label htmlFor="">Email</label>
                        <input type="email" />
                        <div className={styles.comment}>
                        <label htmlFor="">Comment or Message</label>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                        </div>
                        <button type="submit" className={styles.btnSubmit}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}