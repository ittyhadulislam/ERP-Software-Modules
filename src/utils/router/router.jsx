import { createBrowserRouter } from "react-router-dom";
import PenaltySection from "../../pages/PenaltySection";
import App from './../../components/App';
import DashBoard from "../../pages/DashBoard";

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
            
        ]
    }
])