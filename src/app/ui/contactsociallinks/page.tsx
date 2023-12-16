import styles from "./contactsociallinks.module.css"

export default function ContactSocialLinks() {
    return (
        <div className={styles.container}>
            <div className={styles.linksContainer}>
                <div className={styles.socialIcons}>Facebook</div>
                <div className={styles.socialIcons}>Twitter</div>
                <div className={styles.socialIcons}>Instagram</div>
                <div className={styles.socialIcons}>Instagram</div>
                <div className={styles.socialIcons}>Linken</div>
            </div>
        </div>
    )
}