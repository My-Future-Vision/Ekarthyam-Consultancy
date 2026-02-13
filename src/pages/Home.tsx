import React from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Profile } from '../components/Profile';
import { Services } from '../components/Services';
import { Projects } from '../components/Projects';
import { Technologies } from '../components/Technologies';
import { Industries } from '../components/Industries';

export const Home: React.FC = () => {
    return (
        <main>
            <Hero />
            <About />
            <Profile />
            <Services limit={4} />
            <Projects limit={3} />
            <Technologies />
            <Industries />
        </main>
    );
};
