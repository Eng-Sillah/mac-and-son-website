import styles from "./contact.module.css"

export default function Contact() {

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.left}>
                    <h1 className={styles.title}>Let&apos;s Build Your <br /> Dreams!</h1>
                    <p className={styles.desc}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.</p>
                </div>
                <div className={styles.right}>
                    <form action="">
                        <label htmlFor="">Name</label>
                        <div className={styles.inputBox}>
                            <div className={styles.name}>
                                <input type="text" />
                                <label htmlFor="firstname">First</label>
                            </div>
                            <div className={styles.name}>
                                <input type="text" />
                                <label htmlFor="lastname">Last</label>
                            </div>
                        </div>
                        <label htmlFor="">Email</label>
                        <input type="email" />
                        <div className={styles.comment}>
                        <label htmlFor="">Comment or Message</label>
                        <textarea name="" id="" cols={30} rows={10}></textarea>
                        </div>
                        <button type="submit" className={styles.btnSubmit}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}


