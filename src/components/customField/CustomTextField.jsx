import { TextField } from "@mui/material";
import classes from "../../assets/styles/customFieldCss/CustomTextField.module.css";

// eslint-disable-next-line react/prop-types
const CustomTextField = ({ name, disable, type, multiline, rowNumber, label, handelChange = () => { }, handelBlur = () => { }, value = "", required, inputProps, helperText, error }) => {
    const textFieldFullWidth = {
        width: "100%",
        // "& .MuiOutlinedInput-notchedoutline": {
        //     fontSize: "12px"
        // }
    }

    return (
        <TextField
            className={classes.inputField}
            id="outlined-basic"
            label={label}
            name={name}
            disabled={disable}
            type={type}
            multiline={multiline}
            variant="outlined"
            rows={rowNumber}
            sx={textFieldFullWidth}
            onChange={handelChange}
            onBlur={handelBlur}
            value={value}
            required={required}
            inputProps={inputProps}
            helperText={helperText}
            error={error}
        />
    );
};

export default CustomTextField;