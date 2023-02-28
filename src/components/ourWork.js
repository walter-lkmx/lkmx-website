import React from "react";
import styles from "@/components/ourWork.module.scss";
import { Block, Column } from "@lkmx/flare-react";
import Image from "next/image";
import Link from "next/link";
import getLang from '@/lang';
import { useRouter } from "next/router";
import getProjectsIndexed from '../lib/projectsIndex';

function generateRandom(maxLimit = length){
    let rand = Math.random() * maxLimit;
  
    rand = Math.floor(rand); // 99
  
    return rand;
  }

export default function OurWork() {
    const { locale } = useRouter();
    const $t = getLang(locale);
    const projects = getProjectsIndexed(locale);
    const first = projects[generateRandom(projects.length)];
    const second = projects[generateRandom(projects.length)];
    const third = projects[generateRandom(projects.length)];
    console.log(first);
    console.log(second);
    console.log(third);
    return(
        <Column className={styles.ourWork}>
            <Block className={styles.ourWork__block}>
                <h2>{$t.ourWork.title}</h2>
                <div>                     
                    <p>{$t.ourWork.par}</p>
                    <Link href="/work" legacyBehavior>
                        <div
                        className={styles.ourWork__block__btn}
                        >{$t.ourWork.btn}</div> 
                    </Link>
                </div>
                <div className={styles.ourWork__block__grid}>
                    <section className={styles.ourWork__block__grid__full}>
                        <Link href={first.route}>
                            <div className={styles.ourWork__block__grid__full__item}>
                                <div className={styles.ourWork__block__grid__full__item__img}>
                                    <Image
                                        fill
                                        src={`/work/${first.thumbnail}.jpg`}
                                        alt="project image"
                                    />
                                </div>                                    
                                <span>{first.catchphrase}</span>
                            </div>
                        </Link>
                    </section>
                    <section>

                    </section>
                </div>
            </Block>
        </Column>
    );
}