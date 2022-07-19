import { apiRequest } from "./axiosInterface";

export const memeberTestData = [
    { _id: "0", name: "kai", status: true, inputExample: "test" },
    { _id: "1", name: "kai1", status: true, inputExample: "test2" },
    { _id: "2", name: "kai2", status: false, inputExample: "test3" },
    { _id: "3", name: "kai3", status: false, inputExample: "test4" },
    { _id: "4", name: "kai3", status: false, inputExample: "test5" },
    { _id: "5", name: "kai3", status: false, inputExample: "test6" },
    { _id: "6", name: "kai3", status: false, inputExample: "test7" },
]

export const getMemebers = async (params) => { 
    return apiRequest
        .get("users", {
            params
        })
        .then((response) => {
            if (response.data) {
                console.log(response.data)
            }
            return response.data;
        });
};
