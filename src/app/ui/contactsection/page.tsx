import styles from "./contactsection.module.css"

export default function ContactSection() {

    return (
        <div className={styles.container}>
            <hr className={styles.hrCont} />
            <h1 className={styles.title}>Let&apos;s Build Your <br /> Dreams!</h1>
            <p className={styles.contDesc}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.</p>
            <button className={styles.contactBtn}>CONTACT US</button>
        </div>
    )
}