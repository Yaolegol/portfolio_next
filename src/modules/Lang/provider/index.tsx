'use client';

import { IContextData, LangContext } from '@/modules/Lang/context';
import { FC, useState, ReactNode } from 'react';

interface IProps {
    children: ReactNode;
}

export const LangContextProvider: FC<IProps> = ({ children }) => {
    const [langOption, setLangOption] = useState<IContextData>();
    const [langText, setLangText] = useState<any>({});

    return (
        <LangContext.Provider
            value={{ langOption, langText, setLangOption, setLangText }}
        >
            {children}
        </LangContext.Provider>
    );
};
