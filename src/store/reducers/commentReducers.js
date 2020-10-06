const initstate = {
    comments:[
        {id: '1', name:'tooba', content: 'goooddddd'},
        {id: '2', name:'tooba2', content: 'goooddddd 1'},
        {id: '3', name:'tooba3', content: 'goooddddd 2'},
    ]
};

const commentReducers = (state = initstate, action ) =>{
    switch(action.type){
        case 'CREATE_COMMENT':
            console.log('created comment', action.comment);
            return state;
        case 'CREATE_COMMENT_ERROR':
            console.log('create comment error', action.err);
            return state;
        case 'CREATE_COMMENT2':
            console.log('created comment', action.comment2);
            return state;
        case 'CREATE_COMMENT_ERROR2':
        console.log('create comment error', action.err2);
            return state;
        case 'CREATE_COMMENT3':
            console.log('created comment', action.comment3);
            return state;
        case 'CREATE_COMMENT_ERROR3':
            console.log('create comment error', action.err3);
            return state;
        case 'CREATE_COMMENT4':
            console.log('created comment', action.comment4);
            return state;
        case 'CREATE_COMMENT_ERROR4':
            console.log('create comment error', action.err4);
            return state;
        case 'CREATE_COMMENT5':
            console.log('created comment', action.comment5);
            return state;
        case 'CREATE_COMMENT_ERROR5':
            console.log('create comment error', action.err5);
            return state;
        case 'CREATE_COMMENT6':
            console.log('created comment', action.comment6);
            return state;
        case 'CREATE_COMMENT_ERROR6':
            console.log('create comment error', action.err6);
            return state;
        case 'CREATE_COMMENT7':
            console.log('created comment', action.comment7);
            return state;
        case 'CREATE_COMMENT_ERROR7':
            console.log('create comment error', action.err7);
            return state;
        case 'CREATE_COMMENT8':
            console.log('created comment', action.comment8);
            return state;
        case 'CREATE_COMMENT_ERROR8':
            console.log('create comment error', action.err8);
            return state;
        default:
            return state;
    }
}

export default commentReducers;