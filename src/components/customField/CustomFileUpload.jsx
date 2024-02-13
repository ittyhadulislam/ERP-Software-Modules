import { Button, Stack } from "@mui/material";
import { IoMdCloudUpload } from "react-icons/io";
import fileStyle from "../../assets/styles/customFieldCss/CustomFile.module.css";
import classes from "../../assets/styles/customFieldCss/CustomTextField.module.css";


const CustomFileUpload = ({ fileRef, file, handelFileChange, handelFileUpload }) => {
    // console.log(file?.name)
    return (
        <>
            <input
                type="file"
                className={`${classes.inputField} ${fileStyle.fileUpload}`}
                hidden
                onChange={handelFileChange}
                ref={fileRef}
                accept="image/*"
            />
            <Stack direction={"column"} alignItems={"center"} gap={1}>
                <Button
                    startIcon={<IoMdCloudUpload />}
                    className={fileStyle.customFileButton}
                    onClick={handelFileUpload}
                >
                    Upload Image File
                </Button>
                <span className={fileStyle.customText}>
                    {
                        file ? file?.name : "No file Chosen"
                    }
                </span>
            </Stack>

        </>
    );
};

export default CustomFileUpload;