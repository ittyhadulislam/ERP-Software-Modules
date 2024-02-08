import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import classes from "../../assets/styles/customFieldCss/CustomTextField.module.css";

// eslint-disable-next-line react/prop-types
const CustomDateTimePicker = ({ label }) => {
    const dateFieldFullWidth = { width: "100%" }
    return (
        <DatePicker
            className={classes.inputField}
            label={label}
            sx={dateFieldFullWidth}
        />
    );
};

export default CustomDateTimePicker;