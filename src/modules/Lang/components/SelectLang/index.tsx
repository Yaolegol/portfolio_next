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

    const importText = useCallback(
        async ({ value }: IOption) => {
            try {
                const data = await import(
                    `@/modules/Home/text/${value}/index.json`
                );

                const json = data.default;

                if (!json) {
                    return;
                }

                setLangText?.(json);
            } catch (e) {
                console.log(e);
            }
        },
        [setLangText],
    );

    const handleSelect = useCallback(
        (option: IOption) => {
            setLangOption?.(option);
            importText(option);
        },
        [importText, setLangOption],
    );

    return (
        <div className={style.index}>
            <Select onSelect={handleSelect} options={selectOptions} />
        </div>
    );
};
