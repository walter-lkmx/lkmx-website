import es from '@/lang/tranlations/es';
import en from '@/lang/tranlations/en';

export default function getLang(locale) {
    switch (locale) {
        case 'en-US':
            return en;
        default:
            return es;
    }
}
