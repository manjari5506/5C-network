import React, { useState } from "react";
import Navbar from "../Components/Navbar";

const Home = () =>{
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user)
    return(
        <>
        <Navbar/>
        
        </>
    )
}

export default Home;