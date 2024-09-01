'use client';

import { IOption, Select } from '@/components/Select';
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
  const handleSelect = useCallback((option: IOption) => {
    console.log('option');
    console.log(option);
  }, []);

  return (
    <div className={style.index}>
      <Select onSelect={handleSelect} options={selectOptions} />
    </div>
  );
};
