'use server';

import {auth} from '../firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { formType } from '@/app/ui/login/auth-form/AuthForm';

export const authAction = async (prevState:any, formData: FormData) => {
    const formType = formData.get('formType') as formType;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    
    if(formType === 'login') {
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            return {msg: 'success'};
        } catch(err) {
            return {msg: err.message};
        }
    }
    if(formType === 'signup') {
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            return {msg: 'success'};
        } catch(err) {
            return {msg: err.code};
        }
    }
}