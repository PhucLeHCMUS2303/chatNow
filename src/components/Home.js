import React from 'react';
import {useDispatch} from 'react-redux';
import {isSignout} from '../actions/signin';
import {getCookie} from '../common/cookie';

function Home(){

    var CryptoJS = require("crypto-js");

    const dispatch=useDispatch();
    const handelLogout = ()=>{
        const action = isSignout();
        dispatch(action);
        localStorage.removeItem('idToken');
    }
    // console.log(CryptoJS.AES.decrypt(getCookie('email'),'123').toString(CryptoJS.enc.Utf8));
    // console.log(CryptoJS.AES.decrypt(getCookie('password'),'123').toString(CryptoJS.enc.Utf8));
    let strings=getCookie('email');
    var bytes  = CryptoJS.AES.decrypt(strings, '123');
    var plaintext = bytes.toString(CryptoJS.enc.Utf8);
    console.log("decrypted text", plaintext);
    let pas = getCookie('password');
    let bytess = CryptoJS.AES.decrypt(pas, '123');
    console.log(bytess.toString(CryptoJS.enc.Utf8));
   
    return (
      <div>
        <h1>wellcome to chatnow !!!</h1>
        <button className="btn" onClick={handelLogout}>
          Logout <span className="badge badge-primary"></span>
        </button>
      </div>
    );
}
export default Home;