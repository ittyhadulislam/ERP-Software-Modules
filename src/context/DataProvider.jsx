import axios from "axios";
import { createContext, useEffect, useRef, useState } from "react";


export const DataContext = createContext()

const DataProvider = ({ children }) => {

    const [getPersonData, setGetPersonData] = useState([])
    const [tableDataLoading, setTableDataLoading] = useState(false);
    // const [getPersonImageData, setGetPersonImageData] = useState("")
    const [isUpdate, setIsUpdate] = useState(false);

    const formRef = useRef()
    const fileRef = useRef(null)

    const [id, setID] = useState("")
    const [emp_name, setEmpName] = useState("")
    const [emp_id, setEmpID] = useState("")
    const [p_number, setPhoneNumber] = useState("")
    const [email, setEmail] = useState("")
    const [designation, setDesignation] = useState("")
    const [file, setFile] = useState("")

    const [idForImageUpload, setIdForImageUpload] = useState("")

    // add name functionality
    const handelAddName = (e) => {
        setEmpName(e.target.value)
    }

    // add Emp ID functionality
    const handelAddID = (e) => {
        setEmpID(e.target.value)
    }

    // add Number functionality
    const handelAddNumber = (e) => {
        setPhoneNumber(e.target.value)
    }

    // add Email functionality
    const handelAddEmail = (e) => {
        setEmail(e.target.value)
    }

    // add designation functionality
    const handelAddDesignation = (e) => {
        setDesignation(e.target.value)
    }

    // File upload functionality

    const handelFileChange = (e) => {
        const uploadFile = e.target.files[0]
        setFile(uploadFile)
    }

    const handelFileUpload = () => {
        fileRef.current.click()
    }


    // ---------- Add Employee Section ----------

    // ----- Get functionality -----

    const getData = async () => {
        try {
            setTableDataLoading(true);
            const getProfileData = await axios.get("http://192.168.100.186:8086/api/Employee_/GetAll")
            setGetPersonData(getProfileData.data)
            setTableDataLoading(false);
        }
        catch (error) {
            setTableDataLoading(false);
            console.log(error)
        }
    }

    useEffect(() => {
        getData()
    }, [])


    // ----- Post functionality -----


    const HandelPostData = () => {
        const payload = {
            designation,
            email,
            emp_id,
            emp_name,
            p_number,
        }
        try {
            axios.post("http://192.168.100.186:8086/api/Employee_/Create", payload)
                .then(res => {
                    if (res.status === 200) {
                        const IdForImage = res.data
                        setIdForImageUpload(IdForImage?.id)
                    }
                })
                .catch(e =>
                    console.log(e)
                )
        }
        catch (e) {
            console.log(e)
        }
    }

    // console.log(idForImageUpload)

    const ImagePostData = (id) => {
        console.log(id)
        const payload = new FormData()
        payload.append("file", file)
        try {
            axios.post(`http://192.168.100.186:8086/api/Employee_/uploadee/${id}`, payload)
                .then((res) => {
                    if (res.status === 200) {
                        console.log(res?.data)
                        getData()
                        clearField()
                    }
                })
                .catch(e => console.log(e))
        }
        catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        // console.log(idForImageUpload)
        ImagePostData(idForImageUpload)
    }, [idForImageUpload])


    // ----- Edit functionality ------

    const handelEdit = (id) => {
        const edit = getPersonData.find((person) => person.id === id)
        setIsUpdate(true)
        if (edit !== undefined) {
            // console.log(edit)
            setID(edit?.id)
            setEmpName(edit?.emp_name)
            setEmpID(edit?.emp_id)
            setPhoneNumber(edit?.p_number)
            setEmail(edit?.email)
            setDesignation(edit?.designation)

        }
    }

    // ----- Update Functionality -----

    const updateData = (id, data) => {
        try {
            axios.put(`http://192.168.100.186:8086/api/Employee_/${id}`, data)
                .then(() => {
                    getData()
                })
                .catch(err => console.log(err))
        }
        catch (err) {
            console.log(err)
        }
    }

    const handelUpdate = (e) => {
        e.preventDefault();
        const data = { emp_name, emp_id, p_number, email, designation }
        if (!emp_name || !emp_id || !p_number || !email || !designation) {
            formRef.current.reportValidity()
        }
        else {
            updateData(id, data)
            clearField()
            setIsUpdate(false)
        }
    }

    // ----- Delete functionality -----

    const deleteData = (id) => {
        if (window.confirm('Are you sure you want to delete this employee?') === true) {
            try {
                // console.log(id)
                // axios.delete(`http://192.168.100.186:8086/api/Employee_/${id}/delete`)
                axios.delete(`http://192.168.100.186:8086/api/Employee_/${id}`)
                    .then((res) => {
                        if (res.status === 200) {
                            getData()
                        }
                    })
                    .catch(err => console.log(err))
            }
            catch (error) {
                console.log(error)
            }
        }
    }

    const clearField = () => {
        setEmpName("")
        setEmpID("")
        setPhoneNumber("")
        setEmail("")
        setDesignation("")
    }


    return (
        <>
            <DataContext.Provider
                value={
                    {
                        getPersonData,
                        tableDataLoading,
                        HandelPostData,
                        handelEdit,
                        handelUpdate,
                        isUpdate,
                        deleteData,
                        handelFileChange,
                        handelFileUpload,
                        fileRef,
                        file,
                        handelAddName,
                        handelAddID,
                        handelAddNumber,
                        handelAddEmail,
                        handelAddDesignation,
                        emp_name,
                        emp_id,
                        p_number,
                        email,
                        designation,
                        formRef
                    }
                }>
                {children}
            </DataContext.Provider>
        </>
    );
};

export default DataProvider;