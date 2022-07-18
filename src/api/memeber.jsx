export const memeberTestData = [
    { _id: "0", name: "kai", status: true, inputExample: "test" },
    { _id: "1", name: "kai1", status: true, inputExample: "test2" },
    { _id: "2", name: "kai2", status: false, inputExample: "test3" },
    { _id: "3", name: "kai3", status: false, inputExample: "test4" },
    { _id: "4", name: "kai3", status: false, inputExample: "test5" },
    { _id: "5", name: "kai3", status: false, inputExample: "test6" },
    { _id: "6", name: "kai3", status: false, inputExample: "test7" },
]
// call the login api, save api response in localStorage
export const getMemebers = async (params) => {
    // const login =  (username, password) => {
    // mock the user api for test
    const chunk = (arr = [], size = 1) => {
        return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) => arr.slice(i * size, i * size + size))
    }
    const promise = new Promise(res => setTimeout(res, 500));
    await promise;
    let newArray;
    let size = 10;
    if (params.size) {
        size = params.size
        newArray = chunk(memeberTestData, size)
    }
    if (params.page) {
        newArray = newArray[params.page]
    }
    const data = {
        page_index: params.page || 1,
        page_count: memeberTestData.length / size,
        total: memeberTestData.length,
        size: size,
    }
    console.log(data)
    return data;
};
