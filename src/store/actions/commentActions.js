export const createComment = (comment) => {
    return(dispatch, getState, { getFirebase, getFirestore }) => {
        // async call
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('comments').add({
            ...comment,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_COMMENT', comment: comment});
        }).catch((err) => {
            dispatch({ type: 'CREATE_COMMENT_ERROR', err});
        })
        
    }
}

export const createComment2 = (comment2) => {
    return(dispatch, getState, { getFirebase, getFirestore }) => {
        // async call
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('comments2').add({
            ...comment2,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_COMMENT2', comment2: comment2});
        }).catch((err2) => {
            dispatch({ type: 'CREATE_COMMENT_ERROR2', err2});
        })
        
    }
}

export const createComment3 = (comment3) => {
    return(dispatch, getState, { getFirebase, getFirestore }) => {
        // async call
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('comments3').add({
            ...comment3,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_COMMENT3', comment3: comment3});
        }).catch((err3) => {
            dispatch({ type: 'CREATE_COMMENT_ERROR3', err3});
        })
        
    }
}

export const createComment4 = (comment4) => {
    return(dispatch, getState, { getFirebase, getFirestore }) => {
        // async call
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('comments4').add({
            ...comment4,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_COMMENT4', comment4: comment4});
        }).catch((err4) => {
            dispatch({ type: 'CREATE_COMMENT_ERROR4', err4});
        })
        
    }
}

export const createComment5 = (comment5) => {
    return(dispatch, getState, { getFirebase, getFirestore }) => {
        // async call
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('comments5').add({
            ...comment5,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_COMMENT5', comment5: comment5});
        }).catch((err5) => {
            dispatch({ type: 'CREATE_COMMENT_ERROR5', err5});
        })
        
    }
}

export const createComment6 = (comment6) => {
    return(dispatch, getState, { getFirebase, getFirestore }) => {
        // async call
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('comments6').add({
            ...comment6,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_COMMENT6', comment6: comment6});
        }).catch((err6) => {
            dispatch({ type: 'CREATE_COMMENT_ERROR6', err6});
        })
        
    }
}

export const createComment7 = (comment7) => {
    return(dispatch, getState, { getFirebase, getFirestore }) => {
        // async call
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('comments7').add({
            ...comment7,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_COMMENT7', comment7: comment7});
        }).catch((err7) => {
            dispatch({ type: 'CREATE_COMMENT_ERROR7', err7});
        })
        
    }
}

export const createComment8 = (comment8) => {
    return(dispatch, getState, { getFirebase, getFirestore }) => {
        // async call
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('comments8').add({
            ...comment8,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_COMMENT8', comment8: comment8});
        }).catch((err8) => {
            dispatch({ type: 'CREATE_COMMENT_ERROR8', err8});
        })
        
    }
}