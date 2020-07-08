import setCookie from "../../common/cookie";

const rememberMe=(userName)=>{
    setCookie("userName",userName,10);
}

export default rememberMe;