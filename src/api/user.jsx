// import axios from "axios";
// const API_URL = "http://localhost:8080/api/auth/";
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
        ok: true,
        user:{
            name: "카이샹",
            image: "https://bit.ly/kent-c-dodds",
            role: "admin"
        },
        auth_token: "fakeToken",
    }
}
const fakeUserDataFail = {
    data: {
        ok: false,
        error: "username or password error",
    }
}

// call the login api, save api response in localStorage
export const login = async ({username, password}) => {
// const login =  (username, password) => {
    // mock the user api for test
    const promise = new Promise(res => setTimeout(res,500));
    await promise;
    if (username === fakeUserData.username && password === fakeUserData.password) {
        if (fakeUserData.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(fakeUserData.data));
        }
        return fakeUserData.data
    } else {
        return fakeUserDataFail.data
    }
    // ========================= 
    // return axios
    //     .post(API_URL + "login", {
    //         username,
    //         password,
    //     })
    //     .then((response) => {
    //         if (response.data.accessToken) {
    //             localStorage.setItem("user", JSON.stringify(response.data));
    //         }
    //         return response.data;
    //     });
};
