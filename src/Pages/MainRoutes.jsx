import React from "react";
import { Route, Routes } from "react-router-dom";
import Followers from "./Followers";
import Home from "./Home";
import SingleRepo from "./SingleRepo";

const MainRoutes = () => {
  return (
    <Routes>
    
      <Route path="/" element={<Home />} />;
      <Route path="/followers" element={<Followers />} />
      <Route path="/singlerepo/:id" element={<SingleRepo/> } />
    
    </Routes>
  );
};

export default MainRoutes;