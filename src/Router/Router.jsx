import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
const Router = createBrowserRouter([
    {
        path: "/",
        Component:HomeLayout  
    },
    
]);

export default Router;