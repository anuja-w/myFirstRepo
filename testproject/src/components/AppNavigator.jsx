import React from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SystemOwnerLogin from "../SystemOwner/SystemOwnerLogin";



const AppNavigator = () => {
return (
    <Router>
      <Routes>
        <Route path="/SystemOwnerLogin" element={<SystemOwnerLogin />}/>
      </Routes>
    </Router>
  );
};


export default AppNavigator;