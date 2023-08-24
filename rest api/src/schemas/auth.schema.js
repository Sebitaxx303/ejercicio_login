import { z } from 'zod';

export const resgisterSchema = z.object({
    username: z.string({
        required_error: 'username is a required field'
    }),
    email: z.string({
        required_error: 'Email address is a required field'
    }).email({
        message: 'invalid email address'
    }),
    userpassword: z.string({
        required_error: 'Password is a required field'
    }).min(6,{
        message: 'password must be at least 6 characters long'
    })
});

export const loginSchema = z.object({
    email: z.string({
        required_error: 'Email address is a required field'
    }).email({
        message: 'invalid email address'
    }),
    userpassword: z.string({
        required_error: 'Password is a required field'
    }).min(6,{
        message: 'password must be at least 6 characters long'
    })
});