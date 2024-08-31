import { Photo } from '@/modules/Home/components/Photo';
import { FC } from 'react';
import style from './index.module.scss';

export const Home: FC = () => {
    return <div className={style.index}>
        <Photo />
    </div>;
};