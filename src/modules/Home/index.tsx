import { Description } from '@/modules/Home/components/Description';
import { Photo } from '@/modules/Home/components/Photo';
import { Title } from '@/modules/Home/components/Title';
import { SelectLang } from '@/modules/Lang/components/SelectLang';
import { LangContextProvider } from '@/modules/Lang/provider';
import { FC } from 'react';
import style from './index.module.scss';

export const Home: FC = () => {
    return (
        <LangContextProvider>
            <div className={style.index}>
                <Photo />
                <div className={style.selectLang}>
                    <SelectLang />
                </div>
                <div className={style.title}>
                    <Title />
                </div>
                <div className={style.descriptionBlock}>
                    <div className={style.description}>
                        <Description />
                    </div>
                </div>
            </div>
        </LangContextProvider>
    );
};
