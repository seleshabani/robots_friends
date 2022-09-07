import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CardContainer } from "./styled";

const Card = ({ id, name, email }) => {
 
  return (
    <CardContainer>
      <Link to={`/robot/${id}`}>
        <img src={`https://robohash.org/${id}`} alt={`profil de ${name}`} />
        <h1>{name}</h1>
        <p>{email}</p>
      </Link>
    </CardContainer>
  );
};
export default Card;
