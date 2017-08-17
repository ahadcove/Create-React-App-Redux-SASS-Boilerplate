const basicReducer = (state={
    username: null,
    saveLogin: null,
    signedIn: false
}, action) => {
    switch(action.type){
        case 'DEFAULT':
        break;

        default:
            break;
    }
    return state;
};

export default basicReducer;