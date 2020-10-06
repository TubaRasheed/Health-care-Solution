import authReducers from './authReducers';
import commentReducers from './commentReducers';
import doctorReducers from './doctorReducers';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducers = combineReducers({
    auth: authReducers,
    comment: commentReducers,
    doctor: doctorReducers,
    firestore: firestoreReducer,    // by this we display db info in our website 
    firebase: firebaseReducer,      // by this we use fb auth service 

})

export default rootReducers;