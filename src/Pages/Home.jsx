import React from 'react';
import Banner from '../Component/Banner/Banner';
import About from './About';
import Skills from './Skills';
import EducationBg from './EducationSection';
import EducationSection from './EducationSection';
import ContactSection from './ContactSection';
import Projects from './Projects';

const Home = () => {
    return (
        <div>
            <section>
                <Banner></Banner>
            </section>
            <section>
                <Projects></Projects>
            </section>
            <section>
                <About></About>
            </section>
            <section>
                <Skills></Skills>
            </section>
            <section>
                <EducationSection></EducationSection>
            </section>
            <section>
                <ContactSection></ContactSection>
            </section>

        </div>
    );
};

export default Home;