import { ProjectCard } from '@/modules/Home/components/Projects/Project/common/ProjectCard';
import { FC } from 'react';
import style from './index.module.scss';

export const Frutostore: FC = () => {
    return (
        <div className={style.index}>
            <ProjectCard
                clientFeatures={[
                    'Next js',
                    'В проекте используется только 1 библиотека Swiper',
                    'остальное сделано самостоятельно',
                ]}
                description="Интернет магазин"
                features={[
                    'Выбор локали, фильтры, сортировка, пагинация работают через api',
                    'Корзина пользователя работает через localStorage',
                ]}
                href="/"
                img="/images/projects/Frutostore.png"
                lastUpdate="Последнее обновление: 05.01.2025"
                serverFeatures={['Laravel, MySql']}
                title="Frutostore"
                webServer="Nginx"
            />
        </div>
    );
};
