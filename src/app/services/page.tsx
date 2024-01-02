import styles from "./services.module.css"
import WhatWeDo from "./whatwedo/page"
import Contact from "./contact/page"

export default function Services() {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <h1 className={styles.h1}>Services</h1>
            </div>
                 <WhatWeDo />
                 <Contact />
        </div>
    )
}