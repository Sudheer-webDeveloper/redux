import React from "react";
import { configureStore } from "@reduxjs/toolkit"
import cartReducer from './features/cart/cartSlice'
import modalReducer from './features/modal/modalSlice'

 export const store = configureStore({ 
    reducer:{
    cart:cartReducer,
    modal:modalReducer,
 }, 

 
});



// The `configureStore` function is a part of the Redux Toolkit library, which is a set of tools and utilities built on top of Redux to simplify the development of Redux applications. 

// The `configureStore` function is used to create a Redux store, which is the central place where the application state is stored. The store holds the state of the application and provides methods to update the state and subscribe to changes.

// In the provided code, the `configureStore` function is imported from the `@reduxjs/toolkit` package. It is typically used to create a Redux store by combining multiple reducers and applying middleware.

// The line you mentioned is importing the `configureStore` function. It is importing the specific function from the `@reduxjs/toolkit` package, which allows you to use the `configureStore` function in your code.

// Once you have imported the `configureStore` function, you can use it to create a Redux store with the desired configuration options, such as middleware, reducers, and other settings specific to your application.