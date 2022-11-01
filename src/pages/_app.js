import '@lkmx/flare';
import '@/styles/globals.scss';
import ConfigProvider from '@/providers/config-provider';

export default function App({ Component, pageProps }) {
    return (
        <ConfigProvider>
            <Component {...pageProps}/>
        </ConfigProvider>
    );
}