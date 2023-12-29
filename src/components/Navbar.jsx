import React from 'react'
import {CartIcon} from '../icons'

import {useSelector } from 'react-redux/es/hooks/useSelector' 
 // useSelector hook have an accsess to our entire state(inital state) of the store 



function Navbar() {
//   console.log(useSelector((store)=>{console.log(store)}))  // this line will return the entire state of the storem  , that means we can use that states inside the component 

const {amount} = useSelector((store)=>store.cart)
  return (
   <nav>
    <div className="nav-center">
        <h3>redux toolkit</h3>
        <div className="nav-container">
            <CartIcon />
            <div className="amount-container">
                <p className="total-amount">{amount}</p>
            </div>
        </div>
    </div>
   </nav>
  )
}

export default Navbar
