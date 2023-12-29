import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";



const initialState = {
  cartItems: cartItems,
  amount: 1,
  total: 0,
  isLoading:false,
};

export const getCartItems = createAsyncThunk("cart/getCartItems", () => {
  return fetch(url)
    .then((resp = resp.json()))
    .catch((err) => console.log(err));
});

// Immer library is by defaulty will install when we downaload redux-toolkit , it helps us to mutate the state directly , where as with useReducer we have to return a new state always, but with redux is not like that the immer library of redux will take care of that heavy lifting

// In order to use that updated state in any component that we have to use hook  called useDispatch given by redux

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearcart: (state) => {
      // inside the cartSlice object we see all these actions
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      // inside the action we have an accsess to action as well as payload(what we pass inside the action as a argument that will return as a payload in our case we just pass id , because we want id to remove the item) type: "cart/removeItem", payload: "recwTo160XST3PIoW"
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },

    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount - 1;
    },
    CalculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.price * item.amount;
      });

      state.amount = amount;
      state.total = total;
    },
  },
  extraReducers:{
    [getCartItems.pending]:(state) => {
      state.isLoading = true;
    },
    [getCartItems.fulfilled]:(state,action) => {
      console.log(action);
      state.isLoading = false;
      state.cartItems = action.payload;
    },
    [getCartItems.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default cartSlice.reducer;

export const { clearcart, removeItem, increase, decrease, CalculateTotals } =
  cartSlice.actions;
//console.log(cartSlice.reducer) //function reducer(state, action)

//console.log(cartSlice) // an object with name of the slice , reducer:reducer(state,action) , actions:{} , casereducers:{}, initialstate:getInitialState()

//Important

//The `createSlice` function is a utility function provided by the Redux Toolkit library. It is used to generate a Redux slice, which is a collection of Redux related code including reducer functions, action creators, and actions.

// In Redux, a slice represents a logical section of the application state and the corresponding reducer logic to handle state updates. It helps organize the Redux code by splitting it into smaller, more manageable pieces.

// The `createSlice` function simplifies the process of creating a slice by generating the necessary Redux code based on a specified configuration object. The configuration object typically includes the `name` of the slice, an initial `state` value, and a set of `reducers` that define how the state should be updated.

// Here's an example of how `createSlice` can be used:

// ```javascript
// import { createSlice } from "@reduxjs/toolkit";

// const counterSlice = createSlice({
//   name: "counter",
//   initialState: 0,
//   reducers: {
//     increment: (state) => state + 1,
//     decrement: (state) => state - 1,
//   },
// });

// export const { increment, decrement } = counterSlice.actions;
// export default counterSlice.reducer;
// ```

// In this example, the `createSlice` function is used to create a slice named "counter". It defines an initial state of 0 and two reducers: `increment` and `decrement`. These reducers define how the state of the "counter" slice should be updated when the corresponding actions are dispatched.

// The `createSlice` function automatically generates the action creators and action types for the defined reducers. The `actions` object returned by `createSlice` is then exported, allowing you to directly use the generated action creators in your code.

// The `reducer` value returned by `createSlice` is also exported and can be used as the reducer function when creating your Redux store using `configureStore`.

// Using `createSlice` helps eliminate a lot of boilerplate code that is typically needed when manually creating reducers and actions in Redux, making the code more concise and easier to maintain.

// Async Thunk

// AsyncThunk is a feature provided by the Redux Toolkit library. It is a special type of thunk that allows you to write asynchronous logic in Redux applications.

// In Redux, thunks are functions that can be dispatched as actions. They can have side effects, such as making API calls or dispatching multiple actions. Thunks help in managing complex asynchronous workflows in Redux applications.

// AsyncThunk builds on top of the regular thunk concept and provides a way to handle asynchronous actions with ease. It simplifies the process of handling loading, success, and error states of asynchronous operations.

// Here's how you can use AsyncThunk in your Redux application:

// Import AsyncThunk from the "@reduxjs/toolkit" package:

//The async function inside the AsyncThunk definition allows you to write asynchronous logic. It receives two parameters: payload (optional) and thunkAPI. The payload is an optional argument that you can pass when dispatching the async thunk. The thunkAPI provides a set of useful options and functions for handling common asynchronous patterns, such as dispatching other actions.

// The AsyncThunk internally generates three different actions, Life Cycle Actions: pending, fulfilled, and rejected. These actions help to manage the loading, success, and error states of your asynchronous operation.

// By using AsyncThunk, you get a simplified way to handle asynchronous actions in your Redux application, reducing boilerplate code and providing a more intuitive API.
