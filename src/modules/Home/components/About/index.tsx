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
            <div className={style.offset}>
                <AboutProductionExperience />
            </div>
            <div className={style.offset}>
                <AboutUseInProduction />
            </div>
            <div className={style.offset}>
                <AboutAge />
            </div>
            <div className={style.offset}>
                <AboutCity />
            </div>
            <div className={style.offset}>
                <AboutEducation />
            </div>
            <div className={style.offset}>
                <AboutWorkExperience />
            </div>
            <div className={style.offset}>
                <AboutInterests />
            </div>
            <div className={style.offset}>
                <AboutHomeExperience />
            </div>
            <div className={style.offset}>
                <AboutWorkTasks />
            </div>
        </div>
    );
};
