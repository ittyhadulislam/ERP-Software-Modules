import { Box } from "@mui/material";
import photo from "../../../assets/images/beforeUploadImage.jpg";
import classes from "../../../assets/styles/commonCSS/FileUploadImage/FileUploadImage.module.css";


const ShowImage = ({ file }) => {
    // console.log(file)
    return (
        <Box className={classes.imageContainer}>
            {
                file ?
                    <img src={URL.createObjectURL(file)} className={classes.FileUploadImage} alt="Employee Photo" />
                    :
                    <img src={photo} className={classes.FileUploadImage} alt="Employee Photo" />
            }

        </Box>
    );
};

export default ShowImage;