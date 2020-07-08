import * as actions from '../constants/index';

export const isSignin=()=>{
    return {
        type:actions.IS_AUTHENTICATED
    }
}

export const isSignout=()=>{
    return {
        type:actions.NO_AUTHENTICATED
    }
}

export const isLoading=()=>{
    return {
        type:actions.IS_LOADING
    }
}