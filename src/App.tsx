import React from "react";

import "./App.scss";
import LoginPage from "./Pages/Login/LoginPage";


const App: React.FC = () => {
 
  // view => db => add => store => view

  return (
    <div className="App">
      <LoginPage/>
    </div>
  );
};

export default App;
