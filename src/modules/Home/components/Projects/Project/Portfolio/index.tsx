import { ProjectCard } from '@/modules/Home/components/Projects/Project/common/ProjectCard';
import { FC } from 'react';

const CLIENT_FEATURES = [
    'projects.portfolio.clientFeatures.1',
    'projects.portfolio.clientFeatures.2',
    'projects.portfolio.clientFeatures.3',
];

const FEATURES = ['projects.portfolio.features.1'];

export const Portfolio: FC = () => {
    return (
        <ProjectCard
            clientFeatures={CLIENT_FEATURES}
            description="projects.portfolio.description"
            features={FEATURES}
            img="/images/projects/Cats.png"
            lastUpdate="projects.portfolio.lastUpdate"
            title="projects.portfolio.title"
            webServer="projects.portfolio.webServer"
        />
    );
};
