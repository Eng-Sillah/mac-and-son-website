import styles from "./contactsection.module.css"

export default function ContactSection() {

    return (
        <div className={styles.container}>
            <hr className={styles.hrCont} />
            <h1 className={styles.title}>Let&apos;s Build Your <br /> Dreams!</h1>
            <p className={styles.contDesc}>We invite you to contact us for further information about our services or to discuss your specific needs. We are happy to answer your questions and provide you with a personalized solution.</p>
            <button className={styles.contactBtn}>CONTACT US</button>
        </div>
    )
}