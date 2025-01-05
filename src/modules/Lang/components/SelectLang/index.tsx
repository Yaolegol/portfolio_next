'use client';

import { IOption, Select } from '@/components/Select';
import { HomePageContext } from '@/modules/Home/context';
import { LANG_OPTIONS } from '@/modules/Lang/constants';
import { FC, useCallback, useContext, useMemo } from 'react';

export const SelectLang: FC = () => {
    const { langOption, onLangChange } = useContext(HomePageContext);

    const defaultSelectedOptionIndex = useMemo(() => {
        const index = LANG_OPTIONS.findIndex(
            ({ value }) => value === langOption?.value,
        );

        if (index === -1) {
            return 0;
        }

        return index;
    }, [langOption]);

    const handleSelect = useCallback(
        (option: IOption) => {
            onLangChange?.(option);
        },
        [onLangChange],
    );

    return (
        <Select
            defaultSelectedOptionIndex={defaultSelectedOptionIndex}
            onSelect={handleSelect}
            options={LANG_OPTIONS}
        />
    );
};
