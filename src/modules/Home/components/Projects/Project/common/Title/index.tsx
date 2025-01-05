import { IntlMessage } from '@/modules/Lang/components/IntlMessage';
import { FC } from 'react';
import style from './index.module.scss';

interface IProps {
    href?: string;
    title: string;
}

export const Title: FC<IProps> = ({ href, title }) => {
    if (!href) {
        return (
            <span className={style.title}>
                <IntlMessage id={title} />
            </span>
        );
    }

    return (
        <a className={style.title} href={href} target="_blank" rel="noreferrer">
            <IntlMessage id={title} />
        </a>
    );
};
