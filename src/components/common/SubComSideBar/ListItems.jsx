import { List } from '@mui/material';
import classes from "../../../assets/styles/commonCSS/sidebar/ListItems.module.css";
import { menus } from './../../../utils/menus/menus';
import ListMenu from './ListMenu';

// eslint-disable-next-line react/prop-types
const ListItems = () => {
    return (
        <List className={classes.listItems}>
            {
                menus.map((menu, index) => {
                    return (
                        <ListMenu key={index} menuProp={menu} />
                    )
                })
            }
            {/* <ListMenu listText="Dashboard" pathDirection={"/dashboard"} />
            <ListMenu listText="Penalty" pathDirection={"/"} /> */}
        </List>
    );
};

export default ListItems;