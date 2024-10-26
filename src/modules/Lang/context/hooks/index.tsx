import { IContext, LangContext } from '@/modules/Lang/context/context';
import { useContext } from 'react';

export const useLangSelect = (): IContext => {
    const context = useContext(LangContext);

    return context || {};
};
