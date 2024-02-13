import { TextField } from "@mui/material";
import classes from "../../assets/styles/customFieldCss/CustomTextField.module.css";

// eslint-disable-next-line react/prop-types
const CustomTextField = ({ disable, type, multiline, rowNumber, label, handelChange = {}, value = "", required, inputProps }) => {
    const textFieldFullWidth = {
        width: "100%",
    }

    return (
        <TextField
            className={classes.inputField}
            id="outlined-basic"
            label={label}
            disabled={disable}
            type={type}
            multiline={multiline}
            variant="outlined"
            rows={rowNumber}
            sx={textFieldFullWidth}
            onChange={handelChange}
            value={value}
            required={required}
            inputProps={inputProps}
        />
    );
};

export default CustomTextField;