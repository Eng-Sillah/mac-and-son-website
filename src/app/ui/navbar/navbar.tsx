import NavLinks from "./navlinks"
import styles from "./navbar.module.css"

export default function Navbar() {

    return (
        <div className={styles.container}>
            <div>
                <h1>LOGO</h1>
            </div>
            <div className={styles.links}>
                <NavLinks />
                <p>+23276711110</p>
            </div>
        </div>
    )
}