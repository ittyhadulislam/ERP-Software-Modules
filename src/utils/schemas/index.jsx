import * as Yup from "yup"

export const ValidationSchema = Yup.object(
    {
        text: Yup.string().min(5).max(25).required("Please Enter Text"),
        number: Yup.number().min(0).required("Please Enter Number"),
    }
)