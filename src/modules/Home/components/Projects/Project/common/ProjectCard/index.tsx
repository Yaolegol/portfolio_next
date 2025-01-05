import { FC } from 'react';
import style from './index.module.scss';

interface IProps {
    clientFeatures: string[];
    description: string;
    features: string[];
    href: string;
    img: string;
    lastUpdate: string;
    serverFeatures: string[];
    title: string;
    webServer: string;
}

export const ProjectCard: FC<IProps> = ({
    clientFeatures,
    description,
    features,
    href,
    img,
    lastUpdate,
    serverFeatures,
    title,
    webServer,
}) => {
    return (
        <div className={style.index}>
            <div className={style.header}>
                <a href={href}>
                    <img alt={title} className={style.image} src={img} />
                </a>
                <a className={style.title} href={href}>
                    {title}
                </a>
                <div className={style.description}>{description}</div>
                <div className={style.lastUpdate}>{lastUpdate}</div>
            </div>
            <div className={style.body}>
                <div className={style.bodyItem}>
                    <div className={style.featureTitle}>Клиентская часть</div>
                    <ul className={style.featureDescription}>
                        {clientFeatures.map((text) => {
                            return <li key={text}>{text}</li>;
                        })}
                    </ul>
                </div>
                <div className={style.bodyItem}>
                    <div className={style.featureTitle}>Серверная часть</div>
                    <ul className={style.featureDescription}>
                        {serverFeatures.map((text) => {
                            return <li key={text}>{text}</li>;
                        })}
                    </ul>
                </div>
                <div className={style.bodyItem}>
                    <div className={style.featureTitle}>Веб сервер</div>
                    <div className={style.featureDescription}>{webServer}</div>
                </div>
                <div className={style.bodyItem}>
                    <div className={style.featureTitle}>
                        Возможности проекта
                    </div>
                    <ul className={style.featureDescription}>
                        {features.map((text) => {
                            return <li key={text}>{text}</li>;
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};
