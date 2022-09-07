import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../../components/Header";
import { ImageWrapper, SingleWrapper } from "./styled";

const Single = () => {
  const [image, setImage] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const { id } = useParams();

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

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setEmail(data.email);
        setName(data.name);
      });
  }, []);

  return (
    <SingleWrapper>
      <Header />
      <ImageWrapper>
        <img src={image} alt={`profil de ${name}`} />
      </ImageWrapper>
      <h1>
        {name} - {email}
      </h1>
    </SingleWrapper>
  );
};
export default Single;
