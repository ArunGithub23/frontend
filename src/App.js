import React from 'react';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Page1 from './components/page1';
import AddProduct from './components/AddProduct';
import Navbar from './components/Navbar';
import LoginForm from './components/LoginForm';
import Deleteproduct from './components/Deleteproduct';

function App() {
  return (
    <div className="App">
      <div className='Header' ><h2>INVENTORY SYSTEM</h2></div>
      <div className='MAIN'>
   
     <div className='Navbar'>
     
     <Navbar/>
     </div>

     <div className='Main'>
     <div className='Content'>

      <Routes>
        <Route exact path='/productdatail' element={<Page1/>} />
        <Route exact path='/addproduct' element={<AddProduct/>} />
        <Route exact path='/login' element={<LoginForm/>}></Route>
        <Route exact path='/delete' element={<Deleteproduct/>}></Route>

      </Routes>
      
    </div>
     </div>
     </div>

     <div className='Footer'>footer</div>
    </div>
  );
}  
     
    

export default App;
