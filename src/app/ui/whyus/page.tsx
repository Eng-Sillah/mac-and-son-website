import styles from "./whyus.module.css"
import Image from "next/image"
import { FaMedal } from "react-icons/fa6";
import { FaUserTie } from "react-icons/fa";
import { FaRegBuilding } from "react-icons/fa";

export default function WhyUsSection() {

    return (
        <div className={styles.container}>
            <div className={styles.mainContent}>
                <div className={styles.upper}>
                    <h1 className={styles.title}>Why Choose Us?</h1>
                </div>
                <div className={styles.middle}>
                    {/* <Image src="/hero-desktop.jpg"  width={200} height={1} alt="" className="w-full" /> */}
                </div>
                <div className={styles.down}>
                    <div className={styles.cards}>
                        <div className={styles.card}>
                            <div className={styles.icon}>
                            <FaMedal className={styles.faicon} />
                            </div>
                            <h2 className={styles.exper}>20+ Years Experience</h2>
                            <p className={styles.expdes}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.icon}><FaUserTie className={styles.faicon} /></div>
                            <h2 className={styles.exper}>Professional Services</h2>
                            <p className={styles.expdes}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.icon}><FaRegBuilding className={styles.faicon} /></div>
                            <h2 className={styles.exper}>100+ Completed Projects</h2>
                            <p className={styles.expdes}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </div>
                    </div>
                    <hr className={styles.hrExp} />
                </div>

            </div>
        </div>
    )
}