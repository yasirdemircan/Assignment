import { object, string, InferType } from "yup";

export const loginScheme = object(
    {
        email: string().email("Please provide a valid email").required("Email is a required field"),
        password: string().required("Password is a required field")
    }
)

export type LoginType = InferType<typeof loginScheme>