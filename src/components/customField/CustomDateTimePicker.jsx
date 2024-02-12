import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import classes from "../../assets/styles/customFieldCss/CustomTextField.module.css";

// eslint-disable-next-line react/prop-types
const CustomDateTimePicker = ({ label, value, handelSelectDate = {} }) => {
    const dateFieldFullWidth = { width: "100%" }
    return (
        <DatePicker
            format='DD-MM-YYYY'
            className={classes.inputField}
            label={label}
            sx={dateFieldFullWidth}
            value={value}
            onChange={handelSelectDate}
        />
    );
};

export default CustomDateTimePicker;