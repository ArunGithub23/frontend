import React, { useState } from 'react';
import './AddProduct.css';

async function senddata(id,name,price,quantity){
    let data={id,name,price,quantity};
    console.log("THIS IS DATA TO BE SENT",data);

   const result= await fetch("http://localhost:4000/addproduct",
    {
     
      method: "POST",
      headers: {
           "Content-Type": "application/json"
      },
          body:JSON.stringify(data)

    })
    console.log("okk")
    
console.log(result);
}


function AddProduct() {
    let [ID,setID] =useState(0);
    let [name,setName]=useState("");
    let [price,setPrice] =useState(0);
    let [quantity,setquantity] =useState(0);


  return (
    <div className='AddProduct'>
      <table >
        <tbody >
        <tr className='addprdttr'>
                <td>PRODUCT ID</td>
                <td><input type={"text"} onChange={e=>setID(e.target.value)}></input></td>
            </tr>
            <tr>
                <td >PRODUCT NAME</td>
                <td><input type={"text"} onChange={e=>setName(e.target.value)}></input></td>
            </tr>
            <tr>
                <td>PRODUCT PRICE</td>
                <td><input type={"Number"} onChange={e=>setPrice(e.target.value)}></input></td>
            </tr>
            <tr>
                <td>PRODUCT QUANTITY</td>
                <td><input type={"Number"} onChange={e=>setquantity(e.target.value)}></input></td>
            </tr>
            <tr style={{columnSpan:"2"}}>
                <td className='addbtn' ><button onClick={()=>{senddata(ID,name,price,quantity)}}  style={{width:"300px"}}>CLICK TO ADD</button></td>
            </tr>

        </tbody>
      </table>
    </div>
  )
}

export default AddProduct
