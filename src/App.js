import React,{Suspense} from 'react';
import './App.css';
import RoutesComponent from './components/routes/RoutesComponent';
import ChangeLanguages from './components/common/ChangeLanguages';

function HeaderComponent() {
  
  return (
    <div>
    <ChangeLanguages/>
    </div>
  );
}


function App() {
  return (
    <Suspense fallback="loading">
      <div className="App">
        <HeaderComponent/>
        <RoutesComponent />
      </div>
    </Suspense>
  );
}

export default App;