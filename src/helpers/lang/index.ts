import { LANG_OPTIONS } from '@/modules/Lang/constants';

const getCorrectLang = (lang: string) => {
    const isRu = lang.toLowerCase().includes('ru');

    return isRu ? 'ru-RU' : 'en-US';
};

export const getLangText = async (lang: string) => {
    const correctLang = getCorrectLang(lang);
    let langText = {};

    try {
        const data = await import(
            `@/modules/Home/text/${correctLang}/index.json`
        );

        langText = data.default;
    } catch (e) {
        console.error(e);
    }

    return langText;
};

export const getLangOption = (lang: string) => {
    const correctLang = getCorrectLang(lang);

    return (
        LANG_OPTIONS.find(({ value }) => value === correctLang) ??
        LANG_OPTIONS[0]
    );
};
