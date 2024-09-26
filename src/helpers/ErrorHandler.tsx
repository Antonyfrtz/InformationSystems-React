/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { toast } from 'react-toastify';

export const handleError = (error: any) => {
    if (axios.isAxiosError(error)) {
        const errorMessage = error.response;
        if (Array.isArray(errorMessage?.data.errors)) {
            for (const val of errorMessage.data.errors) {
                toast.warning(val.description);
            }
        } else if (typeof errorMessage?.data === 'object') {
            for (const e in errorMessage.data.errors) {
                toast.warning(e);
            }
        } else if (errorMessage?.data) {
            toast.warning(errorMessage.data);
        } else if (errorMessage?.status === 401) {
            toast.warning('Log in to proceed');
            window.history.pushState({}, 'LoginPage', '/login');
        } else if (error) {
            toast.warning('An error occurred');
        }
    }
}