'use client';

import { EMAIL, PHONE } from '@/constants';
import { IntlMessage } from '@/modules/Lang/components/IntlMessage';
import { FC } from 'react';
import style from './index.module.scss';

export const Contacts: FC = () => {
    return (
        <div>
            <a className={style.item} href={`tel:${PHONE}`}>
                <IntlMessage id="main.phone" />: {PHONE}
            </a>
            <a className={style.item} href={`mailto: ${EMAIL}`}>
                Email: {EMAIL}
            </a>
        </div>
    );
};
