const initialState={
    isAuthenticated:false
}

const signinReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'IS_AUTHENTICATED':{
            state.isAuthenticated=true;
            return state;
        }
        case 'NO_AUTHENTICATED':{
            state.isAuthenticated=false;
            return state;
        }
        default:
            return state;
    }
}

export default signinReducer;