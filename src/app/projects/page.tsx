import styles from "./projects.module.css"
import OurProjects from "./ourprojects/page"

export default function Project() {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <h1 className={styles.h1}>Projects</h1>
            </div>
            <OurProjects />
            
           
        </div>
    )
}