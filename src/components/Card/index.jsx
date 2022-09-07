import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CardContainer } from "./styled";

const Card = ({ id, name, email }) => {
  const [image, setImage] = useState();

  useEffect(() => {
    fetch(`https://robohash.org/${id}`)
      .then((response) => response.blob())
      .then((data) => {
        const reader = new FileReader();
        reader.readAsDataURL(data);
        reader.onloadend = () => {
          const base64data = reader.result;
          setImage(base64data);
        };
      });
  }, []);

  return (
    <CardContainer>
      <Link to={`/robot/${id}`}>
        <img src={image} alt={`profil de ${name}`} />
        <h1>{name}</h1>
        <p>{email}</p>
      </Link>
    </CardContainer>
  );
};
export default Card;
