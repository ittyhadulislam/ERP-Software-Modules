import { createBrowserRouter } from "react-router-dom";
import DashBoard from "../../pages/DashBoard";
import PenaltySection from "../../pages/PenaltySection";
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
                path: "/penalty",
                element: <PenaltySection />
            },
            {
                path: "/practice",
                element: <Practice />
            }

        ]
    }
])