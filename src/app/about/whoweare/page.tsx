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
                        <p className={styles.desc}>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.</p>
                        <p className={styles.desc}>Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor nec sagittis sem nibh id elit. Duis sed odio sit amet.</p>
                    </div>

                    <div className={styles.card}>
                        <h2 className={styles.headings}>Professional and Reliable Services</h2>
                        <p className={styles.desc}>Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi.</p>
                        <p className={styles.desc}>Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}