import styles from "./aboutsection.module.css"

export default function AboutSection() {

    return (
        <div className={styles.container}>
            <div className={styles.content}>
            <h1 className={styles.title}>About Us</h1>
            <hr className={styles.hr} />
            <h3 className={styles.heading}>No Job Is to Big for Us. We would Get It Done.</h3>
            <p className={styles.desc}>Mac and Sons Construction Enterprise and Services, founded in 2009 by ALEX ATHALA CHEBLI, stands as a versatile and reliable force in Sierra Leone&apos;s business landscape. With strategic locations in Kenema, Kono, and Freetown, our multifaceted services cover construction, general merchandise supply, cocoa trade, and building materials provision. Embodying our commitment to integrity, quality, and sustainability, we actively engage in community initiatives and serve esteemed clients like World Vision and Save the Children.</p>
            <p className={styles.desc}>The title &quot;No Job Is Too Big for Us. We Will Get It Done&ldquo; encapsulates our ethos, reflecting our dedication to taking on projects of any size with confidence and ensuring successful completion. Mac and Sons envisions being a household name synonymous with excellence and reliability, making significant contributions to Sierra Leone&apos;s economic prosperity and social well-being. As we look toward the future with excitement, we welcome stakeholders to connect with us for personalized solutions and witness how, at Mac and Sons, every job, regardless of size, is approached with determination and expertise.</p>
            <button>READ MORE</button>
            </div>
        </div>
    )
}