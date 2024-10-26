import { FC } from 'react';
import style from './index.module.scss';

export const Title: FC = () => {
    return (
        <div className={style.index}>
            <h1>Олег Олейник</h1>
            <div className={style.description}>Frontend developer</div>
            <div>
                Опыт коммерческой frontend разработки:{' '}
                <span className={style.years}>4+ лет</span>
            </div>
        </div>
    );
};
