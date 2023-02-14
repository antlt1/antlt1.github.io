import './App.scss';
import Layout from './conpoments/layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ThueCode from './thuecode';
//booostrap
// @import "~bootstrap/scss/bootstrap";
import { valAdmin } from './conpoments/router';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        {/* custom tay */}
        <Route path='/' element={<Layout />}/>
        <Route path='/thuecode' element={<ThueCode />}/>
        {/* custom map */}
        {valAdmin.map((val,i)=>{
          return(<Route path={val.root} element={<val.value/>} key={i}/>)
          
        })}
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
