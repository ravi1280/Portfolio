import React from 'react';
import ParticleBackground from '../components/ParticleBackground';
import Hero from '../components/Hero';
import FeaturedSection from '../components/FeaturedSection';
import Stats from '../components/Stats';
import Services from '../components/Services';
import WhatIBring from '../components/WhatIBring';
import Experience from '../components/Experience';
import TechStack from '../components/TechStack';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
            <ParticleBackground />
            <Hero />
            <Services />
            <WhatIBring />
            {/* <FeaturedSection />  */}
            {/* <Stats /> */}

            <Experience />
            <TechStack />
            {/* <Testimonials /> */}
            <CTA />
            <Footer />
        </div>
    );
};

export default Home;
