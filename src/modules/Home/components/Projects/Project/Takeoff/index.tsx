import { ProjectCard } from '@/modules/Home/components/Projects/Project/common/ProjectCard';
import { FC } from 'react';

const CLIENT_FEATURES = [
    'projects.takeoff.clientFeatures.1',
    'projects.takeoff.clientFeatures.2',
    'projects.takeoff.clientFeatures.3',
];

export const Takeoff: FC = () => {
    return (
        <ProjectCard
            clientFeatures={CLIENT_FEATURES}
            description="projects.takeoff.description"
            gitClientLink="https://github.com/Yaolegol/TAKEOFF"
            href="https://takeoff.oleg-oleinik.com/"
            img="/images/projects/takeoff.png"
            lastUpdate="projects.takeoff.lastUpdate"
            title="projects.takeoff.title"
            webServer="projects.takeoff.webServer"
        />
    );
};
