import styles from "./ourprojects.module.css"
import Image from "next/image"

export default function OurProjects() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.projects}>
                    <div className={styles.project}>
                        <div className={styles.ourwork}>
                            <h1>Our Work</h1>
                            <hr className={styles.hr}/>
                        </div>
                        <div className={styles.carouselContainer}>
                            <Image src="/construction-02.jpg" width={200} height={150} alt="service img" className="w-full h-full"/>
                        </div>
                    </div>
                    <div className={styles.project}>
                        <div className={styles.rightDiv}>
                            <Image src="/cocoa-03.jpg" width={200} height={150} alt="service img" className="w-full h-full"/>
                            {/* <h1>Right</h1> */}
                        </div>
                        <div className={styles.rightDiv}>
                            <Image src="/home-extension.jpg" width={200} height={150} alt="service img" className="w-full h-full"/>
                            {/* <h1>Right</h1> */}
                        </div>
                        <div className={styles.rightDiv}>
                            <Image src="/project5.jpg" width={200} height={150} alt="service img" className="w-full h-full"/>
                            {/* <h1>Right</h1> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}