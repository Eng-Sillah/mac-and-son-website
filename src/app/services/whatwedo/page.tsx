import styles from "./whatwedo.module.css"
import Image from "next/image"


export default function WhatWeDo() {

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.heading}>
                    <h1 className={styles.title}>What We Do</h1>
                    <hr className={styles.hr} />
                    <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
                    </div>
                    <div className={styles.cards}>
                        <div className={styles.card}>
                            <div className={styles.cardImg}>
                                <Image src="/hero-desktop.jpg" width={200} height={150} alt="service img" className="w-full h-full"/>
                            </div>
                            <h2 className={styles.cardTitle}>General Contract</h2>
                                <p className={styles.cardDesc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.cardImg}>
                                <Image src="/hero-desktop.jpg" width={200} height={150} alt="service img" className="w-full h-full"/>
                            </div>
                            <h2 className={styles.cardTitle}>General Contract</h2>
                                <p className={styles.cardDesc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.cardImg}>
                                <Image src="/hero-desktop.jpg" width={150} height={200} alt="service img" className="w-full h-full"/>
                            </div>
                            <h2 className={styles.cardTitle}>General Contract</h2>
                                <p className={styles.cardDesc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                        </div>

                        <div className={styles.card}>
                            <div className={styles.cardImg}>
                                <Image src="/hero-desktop.jpg" width={150} height={200} alt="service img" className="w-full h-full"/>
                            </div>
                            <h2 className={styles.cardTitle}>General Contract</h2>
                                <p className={styles.cardDesc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                        </div>

                        <div className={styles.card}>
                            <div className={styles.cardImg}>
                                <Image src="/hero-desktop.jpg" width={150} height={200} alt="service img" className="w-full h-full"/>
                            </div>
                            <h2 className={styles.cardTitle}>General Contract</h2>
                                <p className={styles.cardDesc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                        </div>

                        <div className={styles.card}>
                            <div className={styles.cardImg}>
                                <Image src="/hero-desktop.jpg" width={150} height={200} alt="service img" className="w-full h-full"/>
                            </div>
                            <h2 className={styles.cardTitle}>General Contract</h2>
                                <p className={styles.cardDesc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                        </div>
                    </div>
                
            </div>
        </div>
    )
}