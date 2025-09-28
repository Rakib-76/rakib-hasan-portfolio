import React from 'react';
import Banner from '../Component/Banner/Banner';
import About from './About';
import Skills from './Skills';
import EducationBg from './EducationSection';
import EducationSection from './EducationSection';
import ContactSection from './ContactSection';
import Projects from './Projects';
import ScrollToTop from '../Component/ScrollToTop/ScrollToTop';

const Home = () => {
    return (
        <div>
            <section>
                <Banner></Banner>
            </section>
            <section id='project'>
                <Projects></Projects>
            </section>
            <section id='about'>
                <About></About>
            </section>
            <section id='skill'>
                <Skills></Skills>
            </section>
            <section id='education'>
                <EducationSection></EducationSection>
            </section>
            <section id='contact'>
                <ContactSection></ContactSection>
            </section>
            <section>
                <ScrollToTop/>
            </section>

        </div>
    );
};

export default Home;