import styles from "./about.module.css"
import WhoWeAre from "./whoweare/page"
import Team from "./team/page"

export default function About() {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <h1 className={styles.h1}>About</h1>
            </div>
            <WhoWeAre />
            <Team />
        </div>
    )
}