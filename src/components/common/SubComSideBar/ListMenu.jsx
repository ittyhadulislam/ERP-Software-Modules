import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import classes from "../../../assets/styles/commonCSS/sidebar/MenuItem.module.css";


// eslint-disable-next-line react/prop-types
const ListMenu = ({ menuProp }) => {
    // console.log(menuProp)
    const { pathDirection, listText, icon } = menuProp
    // console.log(pathDirection);
    return (
        <>
            <Link to={pathDirection}>
                <ListItemButton className={classes.listItem}>
                    <ListItemIcon className={classes.listIcon}>
                        {icon}
                    </ListItemIcon>
                    <ListItemText primary={listText} className={classes.listText} />
                </ListItemButton>
            </Link>
        </>
    );
};

export default ListMenu;