'use client';

import { IOption } from '@/components/Select';
import { createContext } from 'react';

export interface IContextData {
    label: string;
    value: string;
}

export interface IContext {
    langOption?: IContextData;
    langText?: any;
    onLangChange?: (option: IOption) => void;
}

export const LangContext = createContext<IContext>({});
