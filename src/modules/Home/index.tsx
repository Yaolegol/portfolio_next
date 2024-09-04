import { Photo } from '@/modules/Home/components/Photo';
import { SelectLang } from '@/modules/Lang/components/SelectLang';
import { LangContextProvider } from '@/modules/Lang/context/provider';
import { FC } from 'react';
import style from './index.module.scss';

export const Home: FC = () => {
  return (
    <LangContextProvider>
      <div className={style.index}>
        <Photo />
        <div className={style.containerSelectLang}>
          <SelectLang />
        </div>
      </div>
    </LangContextProvider>
  );
};
