import React from 'react'
import CartItem from './cartItem'
import {useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { openModal } from '../features/modal/modalSlice'
//  import { clearcart } from '../features/cart/cartSlice'


function CartContainer() {
    const dispatch = useDispatch()
     const {cartItems,total,amount} = useSelector((store)=>{ return store.cart})
    if(amount <1){
        return (
            <section className='cart' >
                <header>
                    <h2>Your Bag</h2>
                    <h4 className='empty-cart'>Is currently empty</h4>
                 </header> 
                 {/* when ever cart is empty then this return will execute  */}
            </section>
        );
    }

  return (
    <section className="cart">
        <header>
            <h2>your bag</h2>
        </header>
        <div>
            {cartItems.map((item)=>{
               return <CartItem key={item.id} {...item} />
            })}
        </div>
        <footer>
            <div className="cart-total">
            <hr />
            <h4>total <span>${total.toFixed(2)}</span></h4>
            </div>
            <button className='btn clear-btn' onClick={()=> dispatch(openModal())}>Clear Cart</button>
        </footer>
    </section>
  )
}

export default CartContainer



// about useSelector

// The `useSelector` function is a hook provided by the `react-redux` library. It is used to extract and access selected data from the Redux store. 

// In Redux, the store holds the entire application state, and `useSelector` allows you to subscribe to a specific part of the state and retrieve its value. It provides a way to access the state values in your React components without having to pass them as props manually.

// In the provided code, the `useSelector` function is imported from the `react-redux` package. It allows you to use the `useSelector` hook in your functional components to access state values from the Redux store.

// The line you mentioned is importing the `useSelector` function. It is importing the specific function from the `react-redux` package, which enables you to use the `useSelector` hook in your code.

// Once you have imported the `useSelector` function, you can use it inside your functional components to select and retrieve specific data from the Redux store by passing a selector function. The selector function specifies which part of the state you want to access and returns the selected data.

// For example, you can use `useSelector` like this:

// ```javascript
// const selectedData = useSelector(state => state.data);
// ```

// In this example, `state => state.data` is the selector function that selects the `data` property from the Redux store state. The `selectedData` variable will hold the value of the `data` property from the Redux store. When the `data` property in the Redux store changes, the component using `useSelector` will automatically re-render to reflect the updated value.




//About useDispatch
//The useDispatch function is another hook provided by the react-redux library. It is used to access the Redux store's dispatch function, which allows you to dispatch actions to update the state.

//In Redux, actions are dispatched to trigger state updates. The dispatch function is responsible for sending these actions to the Redux store, and it is typically accessed through the useDispatch hook.