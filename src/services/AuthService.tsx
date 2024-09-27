import axios from "axios";
import { handleError } from "../helpers/ErrorHandler";
import { UserProfileToken } from "../models/User";

const api = "http://localhost:5179/api/";

export const loginAPI = async (username: string, password: string) => {
    try {
        const data = await axios.post<UserProfileToken>(api + 'account/login', {
            userName: username,
            password: password
        });
        console.log(data);
        return data;
    }
    catch (error) {
        handleError(error);
    }
}

export const registerAPI = async (email: string,username: string,password: string) => {
    try {
        const data = await axios.post<UserProfileToken>(api + "account/register", {
            email: email,
            userName: username,
            password: password,
        });
        return data;
    } catch (error) {
        handleError(error);
    }
};