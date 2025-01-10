import { ProjectCard } from '@/modules/Home/components/Projects/Project/common/ProjectCard';
import { FC } from 'react';

const CLIENT_FEATURES = [
    'projects.frutostore.clientFeatures.1',
    'projects.frutostore.clientFeatures.2',
    'projects.frutostore.clientFeatures.3',
];

const FEATURES = [
    'projects.frutostore.features.1',
    'projects.frutostore.features.2',
];

const SERVER_FEATURES = [
    'projects.frutostore.serverFeatures.1',
    'projects.frutostore.serverFeatures.2',
];

export const Frutostore: FC = () => {
    return (
        <ProjectCard
            clientFeatures={CLIENT_FEATURES}
            description="projects.frutostore.description"
            features={FEATURES}
            gitClientLink="https://github.com/Yaolegol/frutostore_next"
            gitServerLink="https://github.com/Yaolegol/rest_api_frutostore/tree/master"
            href="https://frutostore.oleg-oleinik.com/"
            img="/images/projects/Frutostore.png"
            lastUpdate="projects.frutostore.lastUpdate"
            serverFeatures={SERVER_FEATURES}
            title="projects.frutostore.title"
            webServer="projects.frutostore.webServer"
        />
    );
};
