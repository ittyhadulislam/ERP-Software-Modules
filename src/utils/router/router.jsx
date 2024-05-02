import { createBrowserRouter } from "react-router-dom";
import AddEmpInfo from "../../pages/AddEmpInfo";
import DashBoard from "../../pages/DashBoard";
// import PenaltySection from "../../pages/PenaltySection";
import AddEmpInfoLatest from "../../pages/AddEmpInfoLatest";
import PenaltySectionLatest from "../../pages/PenaltySectionLatest";
import Practice from "../../pages/Practice";
import App from './../../components/App';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <DashBoard />
            },
            {
                path: "/addEmpInfoLatest",
                element: <AddEmpInfoLatest />
            },
            {
                path: "/addEmpInfo",
                element: <AddEmpInfo />
            },
            {
                path: "/penaltyLatest",
                element: <PenaltySectionLatest />
            },
            // {
            //     path: "/penalty",
            //     element: <PenaltySection />
            // },
            {
                path: "/practice",
                element: <Practice />
            },
        ]
    }
])