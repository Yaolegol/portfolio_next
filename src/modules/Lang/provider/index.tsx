'use client';

import { IOption } from '@/components/Select';
import { LANG_OPTIONS } from '@/modules/Lang/constants';
import { IContextData, LangContext } from '@/modules/Lang/context';
import { FC, useState, ReactNode, useEffect, useCallback } from 'react';

interface IProps {
    children: ReactNode;
}

export const LangContextProvider: FC<IProps> = ({ children }) => {
    const [langOption, setLangOption] = useState<IContextData>();
    const [langText, setLangText] = useState<any>({});

    const importText = useCallback(
        async ({ value }: IOption) => {
            try {
                const data = await import(
                    `@/modules/Home/text/${value}/index.json`
                );

                const json = data.default;

                if (!json) {
                    return;
                }

                setLangText?.(json);
            } catch (e) {
                console.log(e);
            }
        },
        [setLangText],
    );

    const onLangChange = useCallback(
        (option: IOption) => {
            setLangOption(option);
            importText(option);
        },
        [importText],
    );

    useEffect(() => {
        const currentLangOption =
            LANG_OPTIONS.find(({ value }) => {
                return value === navigator.language;
            }) ?? LANG_OPTIONS[0];

        setLangOption?.(currentLangOption);
        importText(currentLangOption);
    }, [importText, setLangOption]);

    return (
        <LangContext.Provider value={{ langOption, langText, onLangChange }}>
            {children}
        </LangContext.Provider>
    );
};
