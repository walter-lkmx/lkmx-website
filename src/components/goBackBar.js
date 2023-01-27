import React from "react";
import styles from "@/components/goBackBar.module.scss";
import { Block, Column } from "@lkmx/flare-react";
import Image from "next/image";
import Link from "next/link";
import getLang from '@/lang';
import { useRouter } from "next/router";

export default function GoBackBar({destiny}) {
    const { locale } = useRouter();
    const $t = getLang(locale);
    console.log(destiny);
    return (
        <Column mode="normal" modeM="full">
            <Block className={styles.goBack}>
                <Link href={destiny} legacyBehavior>
                    <div className={styles.goBack__wrapper}>
                        <div className={styles.goBack__icon}>
                            <Image fill src="/icons/arrow-left--white.svg" alt="go back"/>
                        </div>  
                        <span>{$t.goBack}</span>
                    </div>                                      
                </Link>
                
            </Block>
        </Column>
    );
}
