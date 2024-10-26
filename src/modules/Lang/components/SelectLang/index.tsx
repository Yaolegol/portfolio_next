'use client';

import { IOption, Select } from '@/components/Select';
import { useLangSelect } from '@/modules/Lang/context/hooks';
import { FC, useCallback } from 'react';
import style from './index.module.scss';

const selectOptions = [
    {
        label: 'RU',
        value: 'RU',
    },
    {
        label: 'EN',
        value: 'EN',
    },
];

export const SelectLang: FC = () => {
    const { setData } = useLangSelect();

    const handleSelect = useCallback(
        (option: IOption) => {
            setData?.(option);
        },
        [setData],
    );

    return (
        <div className={style.index}>
            <Select onSelect={handleSelect} options={selectOptions} />
        </div>
    );
};
