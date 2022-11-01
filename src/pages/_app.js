import '@lkmx/flare';
import '@/styles/globals.scss';
import  { useRouter } from 'next/router';
import getLang from '@/lang';

export default function App({ Component, pageProps }) {
    let translations = getLang(useRouter().locale)

    return <Component {...pageProps} $t={translations} />;
}