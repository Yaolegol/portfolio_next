'use client';

import { IOption, Select } from '@/components/Select';
import { HomePageContext } from '@/modules/Home/context';
import { LANG_OPTIONS } from '@/modules/Lang/constants';
import { FC, useCallback, useContext } from 'react';

export const SelectLang: FC = () => {
    const { onLangChange } = useContext(HomePageContext);

    const handleSelect = useCallback(
        (option: IOption) => {
            onLangChange?.(option);
        },
        [onLangChange],
    );

    return <Select onSelect={handleSelect} options={LANG_OPTIONS} />;
};
