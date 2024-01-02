import styles from "./ourprojects.module.css"
import Image from "next/image"

export default function OurProjects() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.projects}>
                    <div className={styles.project}>
                        <div>
                            <h1>Our Work</h1>
                            <hr />
                        </div>
                        <div className={styles.carouselContainer}>
                            <Image src="/hero-desktop.jpg" width={200} height={150} alt="service img" className="w-full"/>
                        </div>
                    </div>
                    <div className={styles.project}>
                        <div className={styles.rightDiv}>
                            <Image src="/hero-desktop.jpg" width={200} height={150} alt="service img" className="w-full h-full"/>
                        </div>
                        <div className={styles.rightDiv}>
                            <Image src="/hero-desktop.jpg" width={200} height={150} alt="service img" className="w-full h-full"/>
                        </div>
                        <div className={styles.rightDiv}>
                            <Image src="/hero-desktop.jpg" width={200} height={150} alt="service img" className="w-full h-full"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}