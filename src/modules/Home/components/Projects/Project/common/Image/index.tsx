import { FC } from 'react';
import style from './index.module.scss';

interface IProps {
    href?: string;
    img: string;
    title: string;
}

export const Image: FC<IProps> = ({ href, img, title }) => {
    if (!href) {
        return <img alt={title} className={style.image} src={img} />;
    }

    return (
        <a className={style.link} href={href} target="_blank" rel="noreferrer">
            <img alt={title} className={style.image} src={img} />
        </a>
    );
};
