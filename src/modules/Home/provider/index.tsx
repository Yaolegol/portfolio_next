'use client';

import { IOption } from '@/components/Select';
import { setCookie } from '@/helpers/cookie';
import { getLangText } from '@/helpers/lang';
import { TAB_ID_PROJECTS } from '@/modules/Home/constants';
import { HomePageContext } from '@/modules/Home/context';
import { LANG_COOKIE_NAME } from '@/modules/Lang/constants';
import { ILangData } from '@/modules/Lang/types';
import { FC, useState, ReactNode, useCallback } from 'react';

interface IProps {
    children: ReactNode;
    defaultLangOption: IOption;
    defaultLangText: any;
}

export const LangContextProvider: FC<IProps> = ({
    children,
    defaultLangOption,
    defaultLangText,
}) => {
    const [langOption, setLangOption] = useState<ILangData>(defaultLangOption);
    const [langText, setLangText] = useState<any>(defaultLangText);
    const [activeTab, setActiveTab] = useState<number>(TAB_ID_PROJECTS);

    const importText = useCallback(
        async ({ value }: IOption) => {
            const lantText = await getLangText(value);

            setLangText?.(lantText);
        },
        [setLangText],
    );

    const onLangChange = useCallback(
        (option: IOption) => {
            setLangOption(option);
            importText(option);
            setCookie(LANG_COOKIE_NAME, option.value);
        },
        [importText],
    );

    return (
        <HomePageContext.Provider
            value={{
                activeTab,
                langOption,
                langText,
                onLangChange,
                setActiveTab,
            }}
        >
            {children}
        </HomePageContext.Provider>
    );
};
