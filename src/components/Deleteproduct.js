import React from 'react'
import { useState } from 'react';
import './Deleteproduct.css';

function Deleteproduct() {
    let [productid,setproductid]=useState(0);
    const data={productid};
    function deleteprdt(){
      fetch("http://localhost:4000/delete",
                                            {
                                                method: "DELETE",
                                             headers: {
                                                     "Content-Type": "application/json"
                                                    },
                                                  body:JSON.stringify(data)

                                             });
    }
    

  return (
    <div className='deletediv'>
      <h2>DELETE PRODUCT</h2>
      <table >
        <tbody></tbody>
        <tr>

            <td><input type={Number} onChange={(e)=>setproductid(e.target.value)}></input></td>
            
        </tr>
            <tr>
                <button onClick={()=>{ deleteprdt()  }}>DELETE PRODUCT</button>
            </tr>
      </table>
    </div>
  )
}

export default Deleteproduct
