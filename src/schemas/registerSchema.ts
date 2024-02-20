import { InferType, object, string, ref } from "yup";

export const registerSchema = object(
    {
        email: string().email("Please provide a valid email").required("Email is a required field"),
        password: string().required("Password is a required field").min(8, "Password should be at least 8 characters"),
        password_conf: string().required("Password confirmation is a required field").oneOf([ref("password")], "Password confirmation should match the password"),
    }
)

export type RegisterType = InferType<typeof registerSchema>
