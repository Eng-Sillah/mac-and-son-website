import styles from "./footersection.module.css"

export default function FooterSection() {

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.contactservice}>
                    <div className={styles.contact}>
                        <div className={styles.logo}>LOGO</div>
                        <ul>
                            <li>+23276711110</li>
                            <li>contact@info.com</li>
                            <li>123 Fifth Avenue, New York, NY 10160</li>
                        </ul>
                    </div>
                    <div className={styles.services}>
                        <h2>Our Services</h2>
                        <ul>
                            <li>Construction</li>
                            <li>General Merchandise</li>
                            <li>Cocoa Buying and Selling</li>
                            <li>Building Materials</li>
                            <li>Interior Decoration</li>
                        </ul>
                    </div>
                </div>
                    <div className={styles.aboutus}>
                        <h2>A Few Words About Us</h2>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                    </div>
            </div>
        </div>
    )
}

