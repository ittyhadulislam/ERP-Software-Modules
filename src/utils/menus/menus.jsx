import { AiOutlineAlipayCircle } from "react-icons/ai";
import { MdGavel, MdSpaceDashboard } from "react-icons/md";

export const menus = [
    {
        pathDirection: "/",
        listText: "Dashboard",
        icon: <MdSpaceDashboard color="#76D7C4" size={20} />,
    },
    {
        pathDirection: "/penalty",
        listText: "Penalty Section",
        icon: <MdGavel color="#C0392B" size={20} />,
    },
    {
        pathDirection: "/practice",
        listText: "Practice Section",
        icon: <AiOutlineAlipayCircle color="#C0392B" size={20} />,
    },
]