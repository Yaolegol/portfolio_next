import { FC } from 'react';
import style from './index.module.scss';

interface IProps {
    link: string;
}

export const GitLink: FC<IProps> = ({ link }) => {
    return (
        <a className={style.index} href={link} target="_blank" rel="noreferrer">
            <img alt="Git" className={style.image} src="/images/git.svg" />
            <span>Посмотреть код</span>
        </a>
    );
};
