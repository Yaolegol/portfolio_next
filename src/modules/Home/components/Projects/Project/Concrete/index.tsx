import { ProjectCard } from '@/modules/Home/components/Projects/Project/common/ProjectCard';
import { FC } from 'react';

const CLIENT_FEATURES = [
    'projects.concrete.clientFeatures.1',
    'projects.concrete.clientFeatures.2',
];

const FEATURES = [
    'projects.concrete.features.1',
    'projects.concrete.features.2',
    'projects.concrete.features.3',
    'projects.concrete.features.4',
    'projects.concrete.features.5',
    'projects.concrete.features.6',
    'projects.concrete.features.7',
    'projects.concrete.features.8',
    'projects.concrete.features.9',
    'projects.concrete.features.10',
];

const SERVER_FEATURES = [
    'projects.concrete.serverFeatures.1',
    'projects.concrete.serverFeatures.2',
    'projects.concrete.serverFeatures.3',
];

export const Concrete: FC = () => {
    return (
        <ProjectCard
            clientFeatures={CLIENT_FEATURES}
            description="projects.concrete.description"
            features={FEATURES}
            gitClientLink="https://github.com/Yaolegol/Concrete"
            gitServerLink="https://github.com/Yaolegol/Concrete/tree/master/server"
            href="https://concrete.oleg-oleinik.com/"
            img="/images/projects/Frutostore.png"
            lastUpdate="projects.concrete.lastUpdate"
            serverFeatures={SERVER_FEATURES}
            title="projects.concrete.title"
            webServer="projects.concrete.webServer"
        />
    );
};
