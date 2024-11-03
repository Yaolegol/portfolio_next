import { Contacts } from '@/modules/Home/components/Contacts';
import { Description } from '@/modules/Home/components/Description';
import { Photo } from '@/modules/Home/components/Photo';
import { Title } from '@/modules/Home/components/Title';
import { SelectLang } from '@/modules/Lang/components/SelectLang';
import { FC } from 'react';
import style from './index.module.scss';

export const Home: FC = () => {
    return (
        <div className={style.index}>
            <Photo />
            <div className={style.container}>
                <SelectLang />
            </div>
            <div className={style.container}>
                <Title />
            </div>
            <div className={style.container}>
                <div className={style.description}>
                    <Description />
                </div>
            </div>
            <div className={style.container}>
                <Contacts />
            </div>
        </div>
    );
};
