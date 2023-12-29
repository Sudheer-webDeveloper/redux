import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { store } from "./store.jsx";
import { Provider } from "react-redux"; 



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);




// this is a provider library which gives the access to  the  redux store to our entire application that 's why we wrap our app file with provider

// In React and Redux applications, the Provider component is used to provide the Redux store to all components in the application. It is a higher-order component that wraps your entire application and makes the Redux store accessible to all the connected components.

//Here, the store object is passed as a prop to the Provider component. This makes the Redux store accessible to all components wrapped inside the Provider component.


//Once the store is provided by the Provider, you can use other Redux concepts like connect and mapStateToProps to connect individual components to the Redux store and access the state and dispatch actions.

//Overall, this line of code is importing the Provider component that is necessary to integrate React and Redux by providing the Redux store to all components in the application.