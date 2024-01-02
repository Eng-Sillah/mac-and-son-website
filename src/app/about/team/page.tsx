import styles from "./team.module.css"
import Image from "next/image"
import { FaMedal } from "react-icons/fa6";
import { FaUserTie } from "react-icons/fa";
import { FaRegBuilding } from "react-icons/fa";

export default function Team() {

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.cards}>
                    <div className={styles.card}>
                        <div className={styles.cardImg}>
                        <Image src="/hero-desktop.jpg" width={200} height={150} alt="service img" className="w-full h-full"  />
                        </div>
                        <div className={styles.cardDetail}>
                            <h1 className={styles.cardName}>Sorie B Sillah</h1>
                            <p className={styles.cardDesc}>Lorem ipsum dolor sit amet, consec tetut elit tellus, luctus nec ullam corper mattis, pulvinar.</p>
                            <div className={styles.socialIcons}>
                                <div className={styles.icon}></div>
                                <div className={styles.icon}></div>
                                <div className={styles.icon}></div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardImg}>
                        <Image src="/hero-desktop.jpg" width={200} height={150} alt="service img" className="w-full h-full" />
                        </div>
                        <div className={styles.cardDetail}>
                            <h1 className={styles.cardName}>Jonethan Williams</h1>
                            <p className={styles.cardDesc}>Lorem ipsum dolor sit amet, consec tetut elit tellus, luctus nec ullam corper mattis, pulvinar.</p>
                            <div className={styles.socialIcons}>
                                <div className={styles.icon}></div>
                                <div className={styles.icon}></div>
                                <div className={styles.icon}></div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.card}>

                        <div className={styles.cardDetail}>
                            <h1 className={styles.cardName}>Mohamed Kamara</h1>
                            <p className={styles.cardDesc}>Lorem ipsum dolor sit amet, consec tetut elit tellus, luctus nec ullam corper mattis, pulvinar.</p>
                            <div className={styles.socialIcons}>
                                <div className={styles.icon}></div>
                                <div className={styles.icon}></div>
                                <div className={styles.icon}></div>
                            </div>
                        </div>
                        <div className={styles.cardImg}>
                        <Image src="/hero-desktop.jpg" width={200} height={150} alt="service img" className="w-full h-full" />
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardDetail}>
                            <h1 className={styles.cardName}>Steven Sesay</h1>
                            <p className={styles.cardDesc}>Lorem ipsum dolor sit amet, consec tetut elit tellus, luctus nec ullam corper mattis, pulvinar.</p>
                            <div className={styles.socialIcons}>
                                <div className={styles.icon}></div>
                                <div className={styles.icon}></div>
                                <div className={styles.icon}></div>
                            </div>
                        </div>
                        <div className={styles.cardImg}>
                        <Image src="/hero-desktop.jpg" width={200} height={150} alt="service img" className="w-full h-full" />
                        </div>
                    </div>

                </div>
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

            <div className={styles.contactUsContainer}>
            <hr className={styles.hrCont} />
            <h1 className={styles.title}>Let&apos;s Build Your <br /> Dreams!</h1>
            <p className={styles.contDesc}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.</p>
            <button className={styles.contactBtn}>CONTACT US</button>
        </div>
        </div>
    )
}