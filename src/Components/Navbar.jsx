import React, { useState } from "react";
//import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [userName, setUserName] = useState("");
    const [data, setData] = useState([]);
  
    const handleChange = (e) => {
      setUserName(e.target.value);
    };

    const handleClick = (e) => {
          //e.preventDefault();
          fetch(`https://api.github.com/users/${userName}/repos`)
            .then((response) => {
              return response.json();
            })
            .then((originalData) => {
              if (originalData) {
                setData(originalData);
              }
            });
        };
    localStorage.setItem('user', JSON.stringify({ ...data }));

  return (
    <>
    <div className="navbar">
      <input placeholder="type username" type={userName} onChange={handleChange}/>
              <button onClick={()=> handleClick(userName)}>Search</button>
      </div>
    </>
  );
};

export default Navbar;