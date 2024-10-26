'use client';

import { IContextData, LangContext } from '@/modules/Lang/context/context';
import { FC, useState, ReactNode } from 'react';

interface IProps {
    children: ReactNode;
}

export const LangContextProvider: FC<IProps> = ({ children }) => {
    const [data, setData] = useState<IContextData>();

    return (
        <LangContext.Provider value={{ data, setData }}>
            {children}
        </LangContext.Provider>
    );
};
