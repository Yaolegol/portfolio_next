'use client';

import { IOption, Select } from '@/components/Select';
import { LangContext } from '@/modules/Lang/context';
import { FC, useCallback, useContext } from 'react';
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
    const { setLangOption, setLangText } = useContext(LangContext);

    const fetchText = useCallback(
        async ({ value }: IOption) => {
            try {
                const response = await fetch(`/text/home/${value}/index.json`);
                const text = await response.json();

                if (!response.ok) {
                    return;
                }

                setLangText?.(text);
            } catch (e) {
                console.log(e);
            }
        },
        [setLangText],
    );

    const handleSelect = useCallback(
        (option: IOption) => {
            setLangOption?.(option);
            fetchText(option);
        },
        [fetchText, setLangOption],
    );

    return (
        <div className={style.index}>
            <Select onSelect={handleSelect} options={selectOptions} />
        </div>
    );
};
