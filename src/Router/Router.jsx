import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import SkillsSection from "../Pages/Skills";
import EducationSection from "../Pages/EducationSection";
import ContactSection from "../Pages/ContactSection";
import Projects from "../Pages/Projects";
const Router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "about",
                element: <About></About>
            },
            {
                path: "skill",
                element:<SkillsSection></SkillsSection>
            },
            {
                path: "education",
                element:<EducationSection></EducationSection>
            },
            {
                path: "contact",
                element:<ContactSection></ContactSection>
            },
            {
                path: "project",
                element:<Projects></Projects>
            }
        ]
    },


]);

export default Router;