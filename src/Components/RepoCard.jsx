import React from "react";
import { Link } from "react-router-dom";
import styles from "./RepoCard.module.css"

const RepoCard = ({user,id}) => {
  console.log(user);
  return (
    <>
    <div className={styles.cards} >
    {user.map((item)=>(
      <div className={styles.cards2}>
    <Link to={`/singlerepo/${item.id}`}>
      
      <div className={styles.details}>
        <h2> Repository</h2>
        <div> Name: {item.full_name}</div>
      </div>
      </Link>
    </div>
    ))}
   </div>
    </>
  );
};

export default RepoCard;