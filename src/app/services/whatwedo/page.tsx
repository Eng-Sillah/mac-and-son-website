import styles from "./whatwedo.module.css"
import Image from "next/image"


export default function WhatWeDo() {

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.heading}>
                    <h1 className={styles.title}>What We Do</h1>
                    <hr className={styles.hr} />
                    <p className={styles.whatdesc}>Mac and Sons Construction Enterprise and Services is actively involved in various community initiatives, supporting education, healthcare, and environmental conservation efforts. We believe in giving back to the communities we serve and contributing to positive social development.</p>
                    </div>
                    <div className={styles.cards}>
                        <div className={styles.card}>
                            <div className={styles.cardImg}>
                                <Image src="/construction-01.jpg" width={200} height={150} alt="service img" className="w-full h-full"/>
                            </div>
                            <h2 className={styles.cardTitle}>Construction</h2>
                                <p className={styles.cardDesc}>We undertake various construction projects, including residential and commercial buildings, roads, bridges, and other infrastructure facilities. We have a team of experienced and qualified professionals equipped to handle projects of all sizes and complexities.</p>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.cardImg}>
                                <Image src="/merchandice-01.jpg" width={200} height={150} alt="service img" className="w-full h-full"/>
                            </div>
                            <h2 className={styles.cardTitle}>General Merchandice</h2>
                                <p className={styles.cardDesc}>We are a trusted supplier of a wide variety of general merchandise, including household goods, electronics, clothing, and food items. We cater to both individual consumers and wholesale businesses.</p>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.cardImg}>
                                <Image src="/cocoa-01.jpg" width={150} height={200} alt="service img" className="w-full h-full"/>
                            </div>
                            <h2 className={styles.cardTitle}>Cocoa Buying and Selling</h2>
                                <p className={styles.cardDesc}>We are actively involved in the cocoa trade, directly purchasing cocoa beans from farmers and exporting them to international markets. We also offer competitive prices and reliable services to cocoa producers.</p>
                        </div>

                        <div className={styles.card}>
                            <div className={styles.cardImg}>
                                <Image src="/bmaterial-01.jpg" width={150} height={200} alt="service img" className="w-full h-full"/>
                            </div>
                            <h2 className={styles.cardTitle}>Building Material</h2>
                                <p className={styles.cardDesc}>We provide a comprehensive range of building materials, including cement, sand, gravel, bricks, tiles, and other construction essentials. We are committed to supplying high-quality materials at competitive prices.</p>
                        </div>

                        <div className={styles.card}>
                            <div className={styles.cardImg}>
                                <Image src="/interiordeco-10.jpeg" width={150} height={200} alt="service img" className="w-full h-full"/>
                            </div>
                            <h2 className={styles.cardTitle}>Interior Decoration</h2>
                                <p className={styles.cardDesc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                        </div>

                        <div className={styles.card}>
                            <div className={styles.cardImg}>
                                <Image src="/home-extension.jpg" width={150} height={200} alt="service img" className="w-full h-full"/>
                            </div>
                            <h2 className={styles.cardTitle}>Home Extension</h2>
                                <p className={styles.cardDesc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                        </div>
                    </div>
                
            </div>
        </div>
    )
}