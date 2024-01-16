import styles from "./whoweare.module.css";

export default function WhoWeAre() {

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Who We Are</h1>
                <hr className={styles.hr} />
                <div className={styles.cards}>
                    <div className={styles.card}>
                        <h2 className={styles.headings}>We Make Your Vision Come True</h2>
                        <p className={styles.desc}>Close your eyes. Picture your perfect space  a sun-drenched home, a vibrant community center, a haven for learning. Now, open them and watch it materialize before you. We are Mac and Sons, and what you dream, we build. From foundations rising to meet the sky to meticulous details whispering comfort, we are the artisans of your vision, shaping your aspirations into living, breathing reality.</p>
                        <p className={styles.desc}>So, let your imagination run wild. Let your dreams take flight. We&apos;re here to make them a reality, one brick, one beam, one inspired collaboration at a time.</p>
                    </div>

                    <div className={styles.card}>
                        <h2 className={styles.headings}>Professional and Reliable Services</h2>
                        <p className={styles.desc}>At Mac and Sons, "Professional and Reliable Services" isn&apos;t just a tagline, it&apos;s the cornerstone of everything we do. Imagine a confident construction worker in a hard hat, holding a blueprint and smiling, symbolizing professionalism and expertise.</p>
                        <p className={styles.desc}>Mac and Sons: where expertise meets unwavering dedication. We bridge the gap between blueprint and reality, meticulously crafting your vision with professionalism you can trust, every step of the way.</p>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}