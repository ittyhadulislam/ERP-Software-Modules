import { Grid, Stack } from '@mui/material';
import { useRef, useState } from 'react';
import CustomFileUpload from '../components/customField/CustomFileUpload';
import CustomTextField from '../components/customField/CustomTextField';
import ShowImage from './../components/common/SubComImageUpload/ShowImage';
import FormPart from './../components/customSection/FormPart';

const AddEmpInfo = () => {

    const [addName, setAddName] = useState("")
    const [addID, setAddID] = useState(null)
    const [addNumber, setAddNumber] = useState(null)
    const [addEmail, setAddEmail] = useState("")
    const [addDesignation, setAddDesignation] = useState("")

    // add name functionality
    const handelAddName = (e) => {
        setAddName(e.target.value)
    }

    // add Emp ID functionality
    const handelAddID = (e) => {
        setAddID(e.target.value)
    }

    // add Number functionality
    const handelAddNumber = (e) => {
        setAddNumber(e.target.value)
    }

    // add Email functionality
    const handelAddEmail = (e) => {
        setAddEmail(e.target.value)
    }

    // add designation functionality
    const handelAddDesignation = (e) => {
        setAddDesignation(e.target.value)
    }

    // Submit form data functionality
    const handelSubmitForm = () => {
        console.log("Button clicked")
    }

    // File upload functionality
    const fileRef = useRef(null)
    const [file, setFile] = useState("")

    const handelFileChange = (e) => {
        const uploadFile = e.target.files[0]
        setFile(uploadFile)
    }

    const handelFileUpload = () => {
        fileRef.current.click()
    }

    console.log(file)


    console.log(addName)
    console.log(addID)
    console.log(addNumber)
    console.log(addEmail)
    console.log(addDesignation)

    return (
        <>
            <FormPart text={"Add Employee Info"} handelSubmit={handelSubmitForm} >
                <Grid item xs={12} md={6}>
                    <Stack gap={2}>
                        <CustomTextField type={"text"} label={"Enter Name"} handelChange={handelAddName} value={addName} required={true} />
                        <CustomTextField type={"number"} label={"Enter Employee ID"} handelChange={handelAddID} value={addID} required={true} />
                        <CustomTextField type={"number"} label={"Enter Number"} handelChange={handelAddNumber} value={addNumber} required={true} />
                        <CustomTextField type={"email"} label={"Enter Email"} handelChange={handelAddEmail} value={addEmail} required={true} />
                        <CustomTextField type={"text"} label={"Enter Designation"} handelChange={handelAddDesignation} value={addDesignation} required={true} />
                    </Stack>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Stack justifyContent={"center"} alignItems={"center"} gap={2}>
                        <ShowImage file={file} />
                        <CustomFileUpload fileRef={fileRef} file={file} handelFileChange={handelFileChange} handelFileUpload={handelFileUpload} />
                    </Stack>
                </Grid>
            </FormPart>
        </>
    );
};

export default AddEmpInfo;