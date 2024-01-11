import styles from "./hero.module.css"
import Image from "next/image"
import AboutSection from "../aboutsection/page"
import ClientSection from "../clientsection/page"
import WhyUsSection from "../whyus/page"
import ContactSection from "../contactsection/page"
import ContactSocialLinks from "../contactsociallinks/page"
import FooterSection from "../footersection/footer"


export default function Hero() {

    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <div className={styles.contentMain}>
                    <div className={styles.content}>
                        <h3>Mac and Son Construction Enterprise and Services</h3>
                        <hr className={styles.hr} />
                        <h1>We Build Your <br /> <span>Dream Home</span> </h1>
                        <button>Get In Touch With Us Today </button>
                    </div>
                    <div className={styles.services}>
                        <div className={`${styles.card} ${styles.tealBac}`}>
                            <h3>Professional and Reliable Services.</h3>
                            {/* <div className={styles.cardImg}>
                                <Image src="/hero-desktop.jpg" width={200} height={200} alt=".." className="w-full" />
                            </div> */}
                            <hr className={styles.hr} />
                            <p className={styles.desc}>Lorem ipsum dolor sit amet cons, adipisicing elit. Laboriosam perferendis a suscipit corrupti id sint vel cupiditate quasi minus aperiam,</p>
                            <button className={styles.addBtn}>+</button>
                        </div>
                        <div className={styles.card}>
                
                            <div className={styles.cardImg}>
                                <Image src="/construction-01.jpg" width={300} height={200} alt=".." className="w-full"  />
                            </div>
                            <h4 className={styles.title}>Construction</h4>
                            <p className={styles.desc}>We undertake various construction projects, including residential and commercial buildings, roads, bridges, and other infrastructure facilities. We have a team of experienced and qualified professionals equipped to handle projects of all sizes and complexities.</p>
                            <button className={styles.addBtn}>+</button>
                        </div>
                        <div className={styles.card}>
                            
                            <div className={styles.cardImg}>
                                <Image src="/merchandice-01.jpg" width={300} height={200} alt=".." className="w-full"  />
                            </div>
                            <h4 className={styles.title}>General Merchandise</h4>
                            <p className={styles.desc}>We are a trusted supplier of a wide variety of general merchandise, including household goods, electronics, clothing, and food items. We cater to both individual consumers and wholesale businesses.</p>
                            <button className={styles.addBtn}>+</button>
                        </div>
                        <div className={styles.card}>
                     
                            <div className={styles.cardImg}>
                                <Image src="/cocoa-01.jpg" width={300} height={200} alt=".." className="w-full"  />
                            </div>
                            <h4 className={styles.title}>Cocoa Buying and Selling</h4>
                            <p className={styles.desc}>We are actively involved in the cocoa trade, directly purchasing cocoa beans from farmers and exporting them to international markets. We also offer competitive prices and reliable services to cocoa producers.</p>
                            <button className={styles.addBtn}>+</button>
                        </div>
                        <div className={styles.card}>
                          
                            <div className={styles.cardImg}>
                                <Image src="/bmaterial-01.jpg" width={300} height={200} alt=".." className="w-full"  />
                            </div>
                            <h4 className={styles.title}>Building Materials</h4>
                            <p className={styles.desc}>We provide a comprehensive range of building materials, including cement, sand, gravel, bricks, tiles, and other construction essentials. We are committed to supplying high-quality materials at competitive prices.</p>
                            <button className={styles.addBtn}>+</button>
                        </div>
                        <div className={styles.card}>
                           
                            <div className={styles.cardImg}>
                                <Image src="/interiordeco-10.jpeg" width={300} height={200} alt=".." className="w-full"  />
                            </div>
                            <h4 className={styles.title}>Interior Decoration</h4>
                            <p className={styles.desc}>Lorem ipsum dolor sit amet cons, adipisicing elit. Laboriosam perferendis a suscipit corrupti id sint vel cupiditate quasi minus aperiam,</p>
                            <button className={styles.addBtn}>+</button>
                        </div>

                    </div>
                </div>
                <AboutSection />
                <ClientSection />
                <WhyUsSection />
                <ContactSection />
                <ContactSocialLinks />
                <FooterSection />
            </div>
   
        </div>
    )
}