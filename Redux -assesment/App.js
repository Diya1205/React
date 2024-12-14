import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import RegistrationForm from "./Component/RegistrationForm";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <RegistrationForm />
    </Provider>
  );
}

export default App;
