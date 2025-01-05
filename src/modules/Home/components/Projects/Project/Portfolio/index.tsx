import { ProjectCard } from '@/modules/Home/components/Projects/Project/common/ProjectCard';
import { FC } from 'react';

export const Portfolio: FC = () => {
    return (
        <ProjectCard
            clientFeatures={[
                'Next js',
                'В проекте используется только 1 библиотека Swiper',
                'остальное сделано самостоятельно',
            ]}
            description="Текущий сайт"
            features={['Выбор локали']}
            img="/images/projects/Cats.png"
            lastUpdate="Последнее обновление: 05.01.2025"
            title="Portfolio"
            webServer="Nginx"
        />
    );
};
