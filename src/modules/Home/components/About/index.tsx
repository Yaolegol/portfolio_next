import { AboutAge } from '@/modules/Home/components/About/AboutAge';
import { AboutCity } from '@/modules/Home/components/About/AboutCity';
import { AboutProductionExperience } from '@/modules/Home/components/About/AboutProductionExperience';
import { AboutUseInProduction } from '@/modules/Home/components/About/AboutUseInProduction';
import { AboutEducation } from '@/modules/Home/components/About/AboutEducation';
import { AboutInterests } from '@/modules/Home/components/About/AboutInterests';
import { AboutHomeExperience } from '@/modules/Home/components/About/AboutHomeExperience';
import { AboutWorkExperience } from '@/modules/Home/components/About/AboutWorkExperience';
import { AboutWorkTasks } from '@/modules/Home/components/About/AboutWorkTasks';
import React, { FC } from 'react';
import style from './index.module.scss';

export const About: FC = () => {
    return (
        <div>
            <div className={style.container}>
                <AboutProductionExperience />
            </div>
            <div className={style.container}>
                <AboutUseInProduction />
            </div>
            <div className={style.container}>
                <AboutAge />
            </div>
            <div className={style.container}>
                <AboutCity />
            </div>
            <div className={style.container}>
                <AboutEducation />
            </div>
            <div className={style.container}>
                <AboutWorkExperience />
            </div>
            <div className={style.container}>
                <AboutInterests />
            </div>
            <div className={style.container}>
                <AboutHomeExperience />
            </div>
            <div className={style.container}>
                <AboutWorkTasks />
            </div>
        </div>
    );
};
