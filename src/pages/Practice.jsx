import { Box, Grid } from '@mui/material';
import { useEffect, useState } from 'react';

const Practice = () => {
    // const value = useContext(DataContext)

    // Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
    const top100Films = [
        { id: 1, label: 'The Shawshank Redemption', year: 1994 },
        { id: 2, label: 'The Godfather', year: 1972 },
        { id: 3, label: 'The Godfather: Part II', year: 1974 },
        { id: 4, label: 'The Dark Knight', year: 2008 },
        { id: 5, label: '12 Angry Men', year: 1957 },
        { id: 6, label: "Schindler's List", year: 1993 },
    ];

    const columns = [
        {
            false: "Action",
            renderCell: (row) => {
                return (
                    <>
                        <button onClick={() => console.log(row?.row.id)}>Edit</button>{" ||| "}
                        <button onClick={() => handelDelete(row?.row.id)}>delete</button>
                    </>
                )
            }
        },
        {
            field: "label",
            headerName: "Label",
            flex: 1,
        },
        {
            field: "year",
            headerName: "Year",
            flex: 1,
        }
    ]

    const [arr, setArr] = useState([])

    const [data, setData] = useState(null)
    const [showYear, setShowYear] = useState("")

    useEffect(() => {
        if (data) {
            setShowYear(data?.year)
        }
        else {
            setShowYear("")
        }
    }, [data])

    const handelChange = (e, newValue) => {
        setData(newValue)
    }

    // console.log(data)

    // console.log(data)
    // console.log(showYear)



    const [id, setID] = useState("")
    const [label, setLabel] = useState("")
    const [year, setYear] = useState("")

    // console.log(label)
    // console.log(year)

    // post

    const handelSubmit = () => {
        setArr((array) => [...array, { id, label, year }])
        setID("")
        setLabel("")
        setYear("")
    }

    useEffect(() => {
        setArr(top100Films)
    }, [])

    // delete

    const handelDelete = (id) => {
        setArr(arr.filter(array => array.id !== id))
    }

    // console.log(arr)

    const [val, setVal] = useState(0)

    const handTabsChange = (e, value) => {
        setVal(value)
    }

    const TabPanel = ({ children, value, index }) => {
        return (
            <div>
                {
                    value == index && (
                        <h1>{children}</h1>
                    )
                }
                {/* {value}
                {index} */}

            </div>
        )
    }


    const [val1, setVal1] = useState(0)


    const tabMenu = [
        {
            label: "Item 1"
        },
        {
            label: "Item 2"
        },
        {
            label: "Item 3"
        }
    ]


    const handelChangeTabs = (e, value) => {
        setVal1(value)
    }

    // console.log(val1)

    const TabPanel1 = ({ children, value, index }) => {
        return (
            <Box>
                {
                    value == index && (
                        children
                    )
                }
            </Box>
        )
    }

    // const [handelChangePractice, setHandelChangePractice] = useState({
    //     text: "",
    //     number: ""
    // })
    // const OnClickData = () => {
    //     console.log("Text :", handelChangeText, " | ", "Number :", handelChangeNumber)
    // }
    // const [handelChangeText, setHandelChangeText] = useState("")
    // const [handelChangeNumber, setHandelChangeNumber] = useState("")

    const initialValues = {
        text: "",
        number: ""
    }

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: ValidationSchema,
        onSubmit: (values) => {
            console.log(values)
            values.text = ""
            values.number = ""
        }
    })

    // console.log(touched)


    const countries = [
        { id: 1, country: "Bangladesh" },
        { id: 2, country: "Pakistan" },
        { id: 3, country: "Turkiye" }
    ]

    const states = [
        { id: 1, countryId: 1, name: "Dhaka" },
        { id: 2, countryId: 1, name: "Khulna" },
        { id: 3, countryId: 2, name: "Islamabad" },
        { id: 4, countryId: 2, name: "Karachi" },
        { id: 5, countryId: 3, name: "Ankara" },
        { id: 6, countryId: 3, name: "Istanbul" },
    ]

    const [country, setCountry] = useState(null)
    const [state, setState] = useState(null)

    useEffect(() => {
        setCountry(countries)
    }, [])

    console.log(country)

    const handelOnChange = (e, newValue) => {
        handelSelectCountry(newValue)
    }

    const handelSelectCountry = (id) => {
        const selectCity = states.filter(city => city.countryId === id)
        setState(selectCity)
    }

    console.log(state)

    // const handelOnChangeCity = (e, newValue) => {

    // }

    // console.log(country)


    return (
        <div>
            {/* <h1>{value}</h1> */}
            <h1>Operation with AutoComplete and Text Field</h1>
            <br />
            {/* <div>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={top100Films.map(film => film)}
                    sx={{ width: 300 }}
                    onChange={handelChange}
                    value={data}
                    renderInput={(params) => <TextField {...params} label="Movie" />}
                />
                <TextField disabled value={showYear} />
            </div> */}

            <br />
            <br />
            <br />

            <h1>Edit Feature in same text field</h1>
            <br />
            {/* <div>
                <TextField onChange={(e) => { setID(e.target.value) }} value={id} placeholder='Enter Label' />{" | "}
                <TextField onChange={(e) => { setLabel(e.target.value) }} value={label} placeholder='Enter Label' />{" | "}
                <TextField onChange={(e) => { setYear(e.target.value) }} value={year} placeholder='Enter year' />
                <br /><br />
                <DataGrid
                    rows={arr}
                    columns={columns}
                />
                <br />
                <Button variant='outlined' onClick={handelSubmit}>Submit</Button>
            </div> */}

            <br />
            <br />
            <br />

            <h1>Tab | MUI</h1>

            {/* <Tabs onChange={handTabsChange} value={val}>
                <Tab label="Item1" />
                <Tab label="Item2" />
                <Tab label="Item3" />
            </Tabs>
            <TabPanel value={val} index={0}>
                Item One Details
            </TabPanel>
            <TabPanel value={val} index={1}>
                Item Two Details
            </TabPanel>
            <TabPanel value={val} index={2}>
                Item Three Details
            </TabPanel> */}

            <br />
            <br />
            <br />

            <h1>Tab with dynamic | MUI</h1>

            {/* <Tabs onChange={handelChangeTabs} value={val1}>
                {
                    tabMenu.map((tab, i) => {
                        return (

                            <Tab key={i} label={tab.label} />
                        )
                    })
                }
            </Tabs> */}
            {/* <TabPanel1 value={val1} index={0}>
                <Box>
                    <TextField />
                </Box>
            </TabPanel1> */}

            <br />
            <br />
            <br />

            <h1>Formik and Yep</h1>
            <FormPart text={"Form With Formik"}>
                <Grid item xs={12} md={6} sx={{ paddingBottom: 1 }}>
                    <CustomTextField
                        label={"Text"}
                        name={"text"}
                        handelChange={handleChange}
                        handelBlur={handleBlur}
                        value={values.text}
                        error={errors.text && touched.text}
                        helperText={errors.text && touched.text ? errors.text : ""}
                    />
                    {/* // {
                    //     errors.text && touched.text ?
                    //         <Typography variant='p' sx={{ fontSize: "10px", paddingLeft: "12px", color: "red" }}>{errors.text}</Typography>
                    //         :
                    //         null
                    // } */}
                </Grid>
                <Grid item xs={12} md={6} sx={{ paddingBottom: 1 }}>
                    <CustomTextField
                        type={"number"}
                        label={"Number"}
                        name={"number"}
                        handelChange={handleChange}
                        handelBlur={handleBlur}
                        value={values.number}
                        error={errors.number && touched.number}
                        helperText={errors.number && touched.number ? errors.number : ""}
                    />
                    {/* {
                        errors.number && touched.number ?
                            <Typography variant='p' sx={{ fontSize: "10px", paddingLeft: "12px", color: "red" }}>{errors.number}</Typography>
                            :
                            null
                    } */}
                </Grid>
            </FormPart>
            <ButtonPart>
                <Grid item xs={12} md={7}>
                </Grid>
                <Grid item xs={12} md={1}>
                </Grid>
                <Grid item xs={12} md={4} display={"flex"} justifyContent={"end"} gap={1}>
                    <CustomButton color={"info"} handelSubmit={handleSubmit}>Save</CustomButton>
                </Grid>
            </ButtonPart>

            <br />
            <br />
            <br />
            <h1>Cascading</h1>
            {/* <CustomAutoComplete
                label={"Country"}
                options={
                    country && country !== undefined ?
                        country.map((crt, i) => {
                            return {
                                serial: i,
                                crt.country
                            }
                        })
                        :
                        ""
                }
                handelSelect={handelOnChange}
                value={country} /> */}
            <CustomAutoComplete
                options={country.map((ctr, i) => {
                    return (
                        ctr.country
                    )
                })}
                label={"Country"}
                handelSelect={handelSelectCountry}
                value={state}
            />
            <br />
            <br />

            <br />
            <br />

        </div>
    );
};

export default Practice;

// import { DataGrid } from '@mui/x-data-grid';
import { useFormik } from 'formik';
import { ValidationSchema } from '../utils/schemas';
import CustomAutoComplete from './../components/customField/CustomAutoComplete';
import CustomButton from './../components/customField/CustomButton';
import CustomTextField from './../components/customField/CustomTextField';
import ButtonPart from './../components/customSection/ButtonPart';
import FormPart from './../components/customSection/FormPart';

