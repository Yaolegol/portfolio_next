import { Image } from '@/modules/Home/components/Projects/Project/common/Image';
import { Title } from '@/modules/Home/components/Projects/Project/common/Title';
import { IntlMessage } from '@/modules/Lang/components/IntlMessage';
import { FC } from 'react';
import style from './index.module.scss';
import { GitLink } from '@/components/GitLink';

interface IProps {
    clientFeatures: string[];
    description: string;
    features?: string[];
    gitClientLink?: string;
    gitServerLink?: string;
    href?: string;
    img: string;
    lastUpdate: string;
    serverFeatures?: string[];
    title: string;
    webServer: string;
}

export const ProjectCard: FC<IProps> = ({
    clientFeatures,
    description,
    features,
    href,
    gitClientLink,
    gitServerLink,
    img,
    lastUpdate,
    serverFeatures,
    title,
    webServer,
}) => {
    return (
        <div className={style.index}>
            <div className={style.header}>
                <Image href={href} img={img} title={title} />
                <Title href={href} title={title} />
                <div className={style.description}>
                    <IntlMessage id={description} />
                </div>
                <div className={style.lastUpdate}>
                    <IntlMessage id={lastUpdate} />
                </div>
            </div>
            <div className={style.body}>
                {features && (
                    <div className={style.bodyItem}>
                        <div className={style.featureTitle}>
                            <IntlMessage id="projects.common.features.title" />
                        </div>
                        <ul className={style.featureDescription}>
                            {features.map((text) => {
                                return (
                                    <li className={style.listItem} key={text}>
                                        <IntlMessage id={text} />
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                )}
                <div className={style.bodyItem}>
                    <div className={style.featureTitle}>
                        <IntlMessage id="projects.common.client.title" />
                    </div>
                    <ul className={style.featureDescription}>
                        {clientFeatures.map((text) => {
                            return (
                                <li key={text}>
                                    <IntlMessage id={text} />
                                </li>
                            );
                        })}
                    </ul>
                    {gitClientLink && (
                        <div className={style.git}>
                            <GitLink link={gitClientLink} />
                        </div>
                    )}
                </div>
                {serverFeatures && (
                    <div className={style.bodyItem}>
                        <div className={style.featureTitle}>
                            <IntlMessage id="projects.common.server.title" />
                        </div>
                        <ul className={style.featureDescription}>
                            {serverFeatures.map((text) => {
                                return (
                                    <li key={text}>
                                        <IntlMessage id={text} />
                                    </li>
                                );
                            })}
                        </ul>
                        {gitServerLink && (
                            <div className={style.git}>
                                <GitLink link={gitServerLink} />
                            </div>
                        )}
                    </div>
                )}
                <div className={style.bodyItem}>
                    <div className={style.featureTitle}>
                        <IntlMessage id="projects.common.webServer.title" />
                    </div>
                    <div className={style.featureDescription}>
                        <IntlMessage id={webServer} />
                    </div>
                </div>
            </div>
        </div>
    );
};
