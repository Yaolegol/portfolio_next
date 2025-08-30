import { ProjectCard } from '@/modules/Home/components/Projects/Project/common/ProjectCard';
import { FC } from 'react';

const CLIENT_FEATURES = [
    'projects.concrete.clientFeatures.1',
    'projects.concrete.clientFeatures.2',
    'projects.concrete.clientFeatures.3',
];

const FEATURES = ['projects.concrete.features.1'];

const SERVER_FEATURES = [
    'projects.concrete.serverFeatures.1',
    'projects.concrete.serverFeatures.2',
    'projects.concrete.serverFeatures.3',
];

export const Takeoff: FC = () => {
    return (
        <ProjectCard
            clientFeatures={CLIENT_FEATURES}
            description="projects.takeoff.description"
            features={FEATURES}
            gitClientLink="https://github.com/Yaolegol/TAKEOFF"
            href="https://takeoff.oleg-oleinik.com/"
            img="/images/projects/takeoff.png"
            lastUpdate="projects.takeoff.lastUpdate"
            serverFeatures={SERVER_FEATURES}
            title="projects.takeoff.title"
            webServer="projects.takeoff.webServer"
        />
    );
};
