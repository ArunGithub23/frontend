import React, { useEffect } from 'react';
import './page1.css';
import { useState } from 'react';




const Page1 = () => {
  async function getdata(){
   
    let result= await fetch("http://localhost:4000/XYZ");
    result=await result.json();
    setdata(result);
    console.log("getdata fun");
   
  }
  useEffect(()=>{getdata();},[]);
  
 const [data,setdata]=useState([]);
//const data=[{id:"1",name:"redmi",price:"1000"},{id:"2",name:"samsung",price:"2000"},{id:"3", name:"AJAY GUPTA",price:"NOT FOR SOLD"}];
    
   
  return (
    <div className='pagediv'>
      <h1 style={{textAlign:'center'}}>PRODUCT DETAIL</h1>
      <table className='page1table' >
        <thead>
          <tr className='theadtr'>
            <th className='th1'>PRODUCT ID</th>
            <th className='th1'>PRODUCT NAME</th>
            <th className='th1'>PRODUCT PRICE</th>
          </tr>
        </thead>

        <tbody  className='page1tbody'>
      
     { data.map((element,id) => {
        return(
        
        
         
         <tr key={id}>
             <td className='page1'>{element.productid}</td>
             <td className='page2' >{element.productname}</td>
             <td  className='page3' >{element.productprice}</td>
         </tr>
        
       
        )
      })
    }
     </tbody>
     </table>

</div>
)
}

export default Page1

      
            
       
    