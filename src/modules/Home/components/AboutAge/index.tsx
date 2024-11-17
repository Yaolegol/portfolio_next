'use client';

import { IntlMessage } from '@/modules/Lang/components/IntlMessage';
import { FC } from 'react';
import style from './index.module.scss';

export const AboutAge: FC = () => {
    return (
        <div className={style.index}>
            <div className={style.title}>
                <IntlMessage id="about.age.title" />
            </div>
            <div>35</div>
        </div>
    );
};