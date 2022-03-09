import React, { useState } from "react";
import styles from '../styles/boxes.module.css'
import Image from "next/image";

//logo header
//nav content
//footer

function newsboxes() {
    return (
        <div className={styles.container}>
            <div className={styles.mainNews}>
                <Image 
                    width={600}
                    height={600}
                    src="/../public/Cat.jpg"
                />
                <h2>Lorem ipsum</h2>
            </div>
            <div className={styles.news}>
                <Image
                    width={150}
                    height={150}
                    src="/../public/Cat.jpg"
                />
                <h2>Lorem ipsum 1</h2>
            </div>
            <div className={styles.news1}>
                <Image
                    width={150}
                    height={150}
                    src="/../public/Cat.jpg"
                />
                <h2>Lorem Ipsum 2</h2>
            </div>
            <div className={styles.news2}>
                <Image 
                    width={250}
                    height={250}
                    src="/../public/Cat.jpg"
                />
                <h2>Lorem ipsum 3</h2>
            </div>
            <div className={styles.news3}>
                <Image
                    width={250}
                    height={250}
                    src="/../public/Cat.jpg"
                />
                <h2>Lorem ipsum 4</h2>
            </div>
            <div className={styles.news2}>
                <Image
                    width={250}
                    height={250}
                    src="/../public/Cat.jpg"
                />
                <h2>Lorem ipsum 5</h2>
            </div>
            <div className={styles.news3}>
                <Image
                    width={250}
                    height={250}
                    src="/../public/Cat.jpg"
                />
                <h2>Lorem ipsum 6</h2>
            </div>
            <div className={styles.news2}>
                <Image
                    width={250}
                    height={250}
                    src="/../public/Cat.jpg"
                />
                <h2>Lorem ipsum 7</h2>
            </div>
            <div className={styles.news3}>
                <Image
                    width={250}
                    height={250}
                    src="/../public/Cat.jpg"
                />
                <h2>Lorem ipsum 8</h2>
            </div>
            <div className={styles.news2}>
                <Image
                    width={250}
                    height={250}
                    src="/../public/Cat.jpg"
                />
                <h2>Lorem ipsum 9</h2>
            </div>
            <div className={styles.news3}>
                <Image
                    width={250}
                    height={250}
                    src="/../public/Cat.jpg"
                />
                <h2>Lorem ipsum 10</h2>
            </div>
        </div>
    );
}

export default newsboxes;
