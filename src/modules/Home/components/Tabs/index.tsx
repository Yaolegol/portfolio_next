'use client';

import { Tab } from '@/modules/Home/components/Tab';
import { FC } from 'react';
import style from './index.module.scss';

export const Tabs: FC = () => {
    return (
        <div className={style.index}>
            <Tab icon="profile" onClick={() => {}} title="main.menu.about" />
            <Tab
                icon="projects"
                onClick={() => {}}
                title="main.menu.projects"
            />
        </div>
    );
};
