import React from 'react';
import { Projects } from '../components/Projects';

export const ProjectsPage: React.FC = () => {
    return (
        <main>
            <div style={{ paddingTop: '80px' }}>
                <Projects />
            </div>
        </main>
    );
};
