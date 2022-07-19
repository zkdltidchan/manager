import axios from "axios";
import { API_URL } from "./axiosInterface";

// const register = (username, password) => {
//     return axios.post(API_URL + "signup", {
//         username,
//         password,
//     });
// };

// fakeData
const fakeUserData = {
    username: "admin",
    password: "1234",
    data: {
        data: {
            name: "카이샹",
            image: "https://bit.ly/kent-c-dodds",
            role: "admin"
        },
        access_token: "fakeToken",
    }
}
const fakeUserDataFail = {
    data: {
        error: {
            data: {
                status_code: 401,
                error_message: "username or password error"
            }
        },
    }
}

// call the login api, save api response in localStorage
export const login = async ({ username, password }) => {
    // // mock the user api for test
    // const promise = new Promise(res => setTimeout(res, 500));
    // await promise;
    // if (username === fakeUserData.username && password === fakeUserData.password) {
    //     if (fakeUserData.data.access_token) {
    //         localStorage.setItem("user", JSON.stringify(fakeUserData.data));
    //     }
    //     return fakeUserData.data
    // } else {
    //     return fakeUserDataFail.data
    // }
    // // ========================= 
    return axios
        .post(API_URL + "login", {
            name: username,
            password,
        })
        .then((response) => {
            if (response.data.access_token) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data;
        });
};
