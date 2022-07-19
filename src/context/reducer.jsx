let data = localStorage.getItem('currentUser')
    ? JSON.parse(localStorage.getItem('currentUser')).data
    : '';
let token = localStorage.getItem('currentUser')
    ? JSON.parse(localStorage.getItem('currentUser')).access_token
    : '';

export const initialState = {
    data: '' || data,
    token: '' || token,
    loading: false,
    error: null,
};

export const AuthReducer = (initialState, action) => {
    switch (action.type) {
        case 'REQUEST_LOGIN':
            return {
                ...initialState,
                loading: true,
            };
        case 'LOGIN_SUCCESS':
            console.log(action.payload.access_token)
            return {
                ...initialState,
                data: action.payload.data,
                token: action.payload.access_token,
                loading: false,
            };
        case 'LOGOUT':
            return {
                ...initialState,
                data: '',
                token: '',
            };

        case 'LOGIN_ERROR':
            console.log(action.error)
            return {
                ...initialState,
                loading: false,
                error: action.error.data,
            };

        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
};
