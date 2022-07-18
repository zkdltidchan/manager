// impor
import { getMemebers } from "../api/memeber";
import { login } from "../api/user";
const ROOT_URL = 'https://secret-hamlet-03431.herokuapp.com';


export async function loginUser(dispatch, loginPayload) {
    // request login api
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginPayload),
    };

    try {
        dispatch({ type: 'REQUEST_LOGIN' });
        // let data = await login(requestOptions);
        let data = await login(loginPayload);
        if (data.ok) {
            dispatch({ type: 'LOGIN_SUCCESS', payload: data });
            localStorage.setItem('currentUser', JSON.stringify(data));
            return data;
        }

        dispatch({ type: 'LOGIN_ERROR', error: data.error });
        console.log(data.error);
        return;
    } catch (error) {
        dispatch({ type: 'LOGIN_ERROR', error: error });
        console.log(error);
    }
}

export async function logout(dispatch) {
    // delete login data from localStorage
    dispatch({ type: 'LOGOUT' });
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
}

export async function getMemebersActions(dispatch) {
    dispatch({ type: 'GETMEMBER' });
    let data = await getMemebers();
    return data;
}