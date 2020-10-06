const initstate = {
    authError: null
};

const authReducers = (state = initstate, action ) =>{
    switch(action.type){
        case 'LOGIN_ERROR':
            console.log('login Error');
            return{
                ...state,
                authError: 'LogIn failed'
            }
        case 'LOGIN_SUCCESS':
            console.log('login Success');
            return{
                ...state,
                authError: null
            }
        case 'SIGNOUT_SUCCESS':
            console.log('signOut success');
            return state;
        case 'SIGNUP_SUCCESS':
            console.log('signUp success');
            return{
                ...state,
                authError: null
            }
        case 'SIGNUP_ERROR':
            console.log('signUp error');
            return{
                ...state,
                authError: action.err.message
            }
        default:
            return state;
    }
}

export default authReducers;