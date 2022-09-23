import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import RepoCard from "../Components/RepoCard";

const Home = () =>{
    const user = JSON.parse(localStorage.getItem('user'));
    //console.log(user)
    return(
        <>
        <Navbar/>
        <div>
        <RepoCard user={user}/>
        </div>
        </>
    )
}

export default Home;