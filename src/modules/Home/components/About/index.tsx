import { IntlMessage } from '@/modules/Lang/components/IntlMessage';
import React, { FC } from 'react';
import style from './index.module.scss';

export const About: FC = () => {
    return (
        <div>
            <div className={style.container}>
                <div className={style.title}>
                    <IntlMessage id="about.workExperienceFrontend.title" />
                </div>
                <div className={style.bold}>
                    5+ <IntlMessage id="main.workExperience.measure" />
                </div>
            </div>
            <div className={style.container}>
                <div className={style.title}>
                    <IntlMessage id="about.useInProd.title" />
                </div>
                <div>
                    <div className={style.description}>
                        <span className={style.bold}>
                            <IntlMessage id="about.useInProd.value1Title" />{' '}
                        </span>
                        <IntlMessage id="about.useInProd.value1" />
                    </div>
                    <div className={style.description}>
                        <span className={style.bold}>
                            <IntlMessage id="about.useInProd.value2Title" />{' '}
                        </span>
                        <IntlMessage id="about.useInProd.value2" />
                    </div>
                    <div className={style.description}>
                        <span className={style.bold}>
                            <IntlMessage id="about.useInProd.value3Title" />{' '}
                        </span>
                        <IntlMessage id="about.useInProd.value3" />
                    </div>
                    <div className={style.description}>
                        <span className={style.bold}>
                            <IntlMessage id="about.useInProd.value4Title" />{' '}
                        </span>
                        <IntlMessage id="about.useInProd.value4" />
                    </div>
                    <div className={style.description}>
                        <span className={style.bold}>
                            <IntlMessage id="about.useInProd.value5Title" />{' '}
                        </span>
                        <IntlMessage id="about.useInProd.value5" />
                    </div>
                </div>
            </div>
            <div className={style.container}>
                <div className={style.title}>
                    <IntlMessage id="about.age.title" />
                </div>
                <div>35</div>
            </div>
            <div className={style.container}>
                <div className={style.title}>
                    <IntlMessage id="about.city.title" />
                </div>
                <div>
                    <IntlMessage id="about.city.value" />
                </div>
            </div>
            <div className={style.container}>
                <div className={style.title}>
                    <IntlMessage id="about.education.title" />
                </div>
                <div>
                    <IntlMessage id="about.education.value2" />
                </div>
            </div>
            <div className={style.container}>
                <div className={style.title}>
                    <IntlMessage id="about.workExperience.title" />
                </div>
                <div>
                    <div className={style.description}>
                        <IntlMessage id="about.workExperience.value1" />
                    </div>
                    <div className={style.description}>
                        <IntlMessage id="about.workExperience.value2" />
                    </div>
                </div>
            </div>
            <div className={style.container}>
                <div className={style.title}>
                    <IntlMessage id="about.interests.title" />
                </div>
                <div>
                    <IntlMessage id="about.interests.value" />
                </div>
            </div>
            <div className={style.container}>
                <div className={style.title}>
                    <IntlMessage id="about.skills.title" />
                </div>
                <div>
                    <div className={style.description}>
                        <span className={style.bold}>
                            <IntlMessage id="about.skills.value1Title" />{' '}
                        </span>
                        <IntlMessage id="about.skills.value1" />
                    </div>
                    <div className={style.description}>
                        <span className={style.bold}>
                            <IntlMessage id="about.skills.value2Title" />{' '}
                        </span>
                        <IntlMessage id="about.skills.value2" />
                    </div>
                    <div className={style.description}>
                        <span className={style.bold}>
                            <IntlMessage id="about.skills.value3Title" />{' '}
                        </span>
                        <IntlMessage id="about.skills.value3" />
                    </div>
                    <div className={style.description}>
                        <span className={style.bold}>
                            <IntlMessage id="about.skills.value4Title" />{' '}
                        </span>
                        <IntlMessage id="about.skills.value4" />
                    </div>
                    <div className={style.description}>
                        <span className={style.bold}>
                            <IntlMessage id="about.skills.value5Title" />{' '}
                        </span>
                        <IntlMessage id="about.skills.value5" />
                    </div>
                </div>
            </div>
            <div className={style.container}>
                <div className={style.title}>
                    <IntlMessage id="about.experience.title" />
                </div>
                <div>
                    <div className={style.description}>
                        <IntlMessage id="about.experience.value1" />
                    </div>
                    <div className={style.description}>
                        <IntlMessage id="about.experience.value2" />
                    </div>
                    <div className={style.description}>
                        <IntlMessage id="about.experience.value3" />
                    </div>
                    <div className={style.description}>
                        <IntlMessage id="about.experience.value4" />
                    </div>
                    <div className={style.description}>
                        <IntlMessage id="about.experience.value5" />
                    </div>
                    <div className={style.description}>
                        <IntlMessage id="about.experience.value6" />
                    </div>
                    <div className={style.description}>
                        <IntlMessage id="about.experience.value7" />
                    </div>
                    <div className={style.description}>
                        <IntlMessage id="about.experience.value8" />
                    </div>
                </div>
            </div>
        </div>
    );
};
