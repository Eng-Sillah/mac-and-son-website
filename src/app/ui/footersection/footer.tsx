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
                            <li>mac.sons1092009@yahoo.com/ chebli.alex@yahoo.com</li>
                            <li>108A Blama Road Kenema, 20/25 Sembehun Road Kono, and Wan Ose Junction Freetown, Sierra Leone</li>
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
                        <p>We prioritize the needs and satisfaction of our clients, aiming to exceed their expectations.</p>
                    </div>
            </div>
        </div>
    )
}

