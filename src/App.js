import React,{Suspense,useEffect} from 'react';
import './App.css';
import RoutesComponent from './components/routes/RoutesComponent';
import MultiLanguages from './components/common/multiLanguages';
import { Spin } from 'antd';
import {useSelector } from 'react-redux';
import {useDispatch} from 'react-redux';
import {isLoading} from './actions/signin';
import {auth} from "./services/firebase";
import {isSignin} from "./actions/signin";
import expirationUser from "./services/expirationUser";

function HeaderComponent() {
  return (
    <div>
    <MultiLanguages/>
    </div>
  );
}

function SpinLoading(){

  return (
    <Spin className="SpinLoading" size="large"></Spin>
  );

}

function App() {

  const checkLoading = useSelector(state=>state.signin.isLoading);
  const dispatch=useDispatch();

  useEffect(()=>{
    auth().onAuthStateChanged(userAuth => {
        if(userAuth){
          const actionSignin = isSignin();
          dispatch(actionSignin);
          expirationUser();
        }
        const action=isLoading();
        dispatch(action);
    });
  })

  return (
    checkLoading===false?
    <Suspense fallback="loading">
      <div className="App">
        <HeaderComponent/>
        <RoutesComponent />
      </div>
    </Suspense>:<SpinLoading/>
  );
}

export default App;