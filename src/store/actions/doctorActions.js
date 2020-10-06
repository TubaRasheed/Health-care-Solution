export const createDoctor = (doctor) => {  // receving state in doctor var 
    return(dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('doctors').add({
            ...doctor,                 // it takes state of our doctorjoin form 
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
        }).then(()=> {
            dispatch({ type: 'CREATE_DOCTOR_SUCCESS', doctor });
        }).catch((err) => {
            dispatch({type: 'CREATE_DOCTOR_ERROR', err});
        })
    }
}