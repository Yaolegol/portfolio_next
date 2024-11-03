'use client';

import { IntlMessage } from '@/modules/Lang/components/IntlMessage';
import { Icon } from '@/components/Icon';
import { FC } from 'react';
import style from './index.module.scss';

interface IProps {
    icon: string;
    onClick: () => void;
    title: string;
}

export const Tab: FC<IProps> = ({ icon, onClick, title }) => {
    return (
        <button className={style.index} onClick={onClick} type="button">
            <Icon className={style.icon} name={icon} />
            <span className={style.title}>
                <IntlMessage id={title} />
            </span>
        </button>
    );
};
