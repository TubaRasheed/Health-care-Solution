const initState = { };

const doctorReducers = ( state = initState, action ) => {
    switch(action.type){
        case 'CREATE_DOCTOR_SUCCESS':
            console.log('created profile', action.doctor);
            return state;
        case 'CREATE_DOCTOR_ERROR':
            console.log('created profile error', action.err);
            return state;
        default:
            return state;
    }
}

export default doctorReducers;