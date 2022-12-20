import '@lkmx/flare';
import '@/styles/globals.scss';
import { Inter } from '@next/font/google'
import { Roboto_Condensed } from '@next/font/google'
import { IBM_Plex_Sans } from '@next/font/google'

const inter = Inter({ 
    subsets: ['latin'],
    weight: ['400', '800'],
    variable: '--lk-font-inter'
 })
const roboto = Roboto_Condensed({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--lk-font-roboto'
})
const ibm = IBM_Plex_Sans({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--lk-font-ibm'
})
console.log()

export default function App({ Component, pageProps }) {
    return (
        <div className={`${inter.variable} ${roboto.variable} ${ibm.variable}`}>
            <Component {...pageProps}/>
        </div>
    );
}