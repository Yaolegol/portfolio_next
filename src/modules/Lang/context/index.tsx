'use client';

import { createContext, Dispatch, SetStateAction } from 'react';

export interface IContextData {
    label: string;
    value: string;
}

export interface IContext {
    langOption?: IContextData;
    langText?: any;
    setLangOption?: Dispatch<SetStateAction<IContextData | undefined>>;
    setLangText?: Dispatch<SetStateAction<any>>;
}

export const LangContext = createContext<IContext>({});
