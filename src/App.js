import React   from 'react';
import './App.css';

import Dashboard  from './Dashboard';
import  Sidebar  from './Sidebar';
import Proedit from './Proedit';
import Useredit from './Useredit';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
   
   
    <div id="wrapper">
     
<BrowserRouter>
    <Sidebar/>
    
    <div id="content-wrapper" class="d-flex flex-column">
    <div id="content">
    <div class="container-fluid">
     
 <h1>LINK ROUTE PATH</h1>
                
    <Routes> 
    <Route path="/dashboard" element ={<Dashboard/>}/>
    <Route path="/productlist" element={<Proedit/>}></Route>
   <Route path ="/userlist" element = {<Useredit/>}/>
  
    </Routes>
                   
    
   
      
    
    
    
    </div>
    </div>
    </div>
    
    
    </BrowserRouter>
    </div>  
    
    
  );
}

export default App;
