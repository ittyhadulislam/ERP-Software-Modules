import { Autocomplete, TextField } from '@mui/material';
import classes from "../../assets/styles/customFieldCss/CustomTextField.module.css";

// eslint-disable-next-line react/prop-types
const CustomAutoComplete = ({ options = {}, label }) => {
    const autoCompleteStyle = {
        "& .MuiOutlinedInput-root": { height: "30px" },
        "& .MuiAutocomplete-inputRoot .MuiAutocomplete-input": { padding: "0px 9px", height: '15px', fontSize: "14px" },
    }
    return (
        <>
            <Autocomplete
                className={classes.inputField}
                options={options}
                renderInput={(params) => {
                    return (
                        <TextField
                            {...params}
                            label={label}
                            sx={autoCompleteStyle}
                        />
                    )
                }}
            />
        </>
    );
};

export default CustomAutoComplete;