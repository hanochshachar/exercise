import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Main } from './components/Main';
import { Sort } from './components/Sort';
import { Pagination } from './components/Pagination';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}>
               {/* OUTLET */}
               <Route path='/sorted-data' element={<Sort/>} />
               <Route path='/pagination-data' element={<Pagination/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
