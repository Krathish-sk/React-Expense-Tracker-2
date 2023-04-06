import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { AppProvider } from "./Context/AppContext";
import Display from "./Components/Display";

const App = () => {
  return (
    <AppProvider>
      <div className="container">
        <Display />
      </div>
    </AppProvider>
  );
};

export default App;
