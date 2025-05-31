import React from 'react';
import Home from "./home/Home";
import Singup from './component/Singup';
import { Route, Routes} from "react-router-dom";
import Courses from './courses/Courses';
import Contect from "./contect/Contect";
function App() {
  return (
   <>
   <div >
    <Routes>
    <Route path="/contect" element={<Contect/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/course"  element={<Courses />}/>
      <Route path="/signup"  element={<Singup />}/>
      </Routes>
      </div>
   </>
   );
  
}

export default App;
