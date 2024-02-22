import { Autocomplete, TextField } from '@mui/material';
import classes from "../../assets/styles/customFieldCss/CustomTextField.module.css";

// eslint-disable-next-line react/prop-types
const CustomAutoComplete = ({ options = {}, label, value, handelSelect = {} }) => {
    const autoCompleteStyle = {
        "& .MuiOutlinedInput-root": { height: "25px", padding: 0 },
        "& .MuiAutocomplete-inputRoot .MuiAutocomplete-input": { padding: "0px 9px", height: '15px', fontSize: "14px" },
    }
    return (
        <>
            <Autocomplete
                className={classes.inputField}
                value={value}
                onChange={handelSelect}
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