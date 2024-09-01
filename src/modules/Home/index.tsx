import { Photo } from '@/modules/Home/components/Photo';
import { SelectLang } from '@/modules/Home/components/SelectLang';
import { FC } from 'react';
import style from './index.module.scss';

export const Home: FC = () => {
  return (
    <div className={style.index}>
      <Photo />
      <div className={style.containerSelectLang}>
        <SelectLang />
      </div>
    </div>
  );
};
