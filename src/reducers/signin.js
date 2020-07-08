import * as types from '../constants/index';

const initialState={
    isAuthenticated:false,
    isLoading:true
}

const signinReducer=(state=initialState,action)=>{
    switch(action.type){
        case types.IS_AUTHENTICATED:{
            state.isAuthenticated=true;
            return state;
        }
        case types.NO_AUTHENTICATED:{
            state.isAuthenticated=false;
            return state;
        }
        case types.IS_LOADING:{
            state.isLoading=false
            return state;
        }
        default:
            return state;
    }
}

export default signinReducer;