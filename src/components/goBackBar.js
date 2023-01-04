import React from "react";
import styles from "@/components/goBackBar.module.scss";
import { Block, Column } from "@lkmx/flare-react";
import Image from "next/image";
import Link from "next/link";
import getLang from '@/lang';
import { useRouter } from "next/router";

export default function GoBackBar() {
    const { locale } = useRouter();
    const $t = getLang(locale);
    return (
        <Column mode="normal">
            <Block className={styles.goBack}>
                <Link href="/services" legacyBehavior>
                    <div className={styles.goBack__icon}>
                        <Image fill src="/icons/arrow-left--white.svg" alt="go back"/>
                    </div>                    
                </Link>
                <span>{$t.goBack}</span>
            </Block>
        </Column>
    );
}
