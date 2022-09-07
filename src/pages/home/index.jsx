import React, { useEffect, useRef, useState } from "react";
import Card from "../../components/Card";
import { CardsWrapper, HomeWrapper, InputWrapper, StyledInput } from "./style";
import Header from "../../components/Header";
const Home = () => {
  const [cards, setCards] = useState([]);
  const inputRef = useRef();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setCards(data);
      });
  }, []);

  const handleSearch = (e) => {
    let token = inputRef.current.value;
    if (token.length >= 3) {
      let results = cards.filter((card) => {
        return card.name.toLowerCase().indexOf(token.toLowerCase()) !== -1;
      });
      setCards(results);
    } else {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => {
          setCards(data);
        });
    }
  };
  const renderCards = () => {
    return cards.map((card, indx) => {
      return (
        <Card id={card.id} name={card.name} email={card.email} key={indx} />
      );
    });
  };

  return (
    <HomeWrapper>
      {/* <InputWrapper>
        <Title>Mes amis Robots</Title>
        <StyledInput ref={inputRef} onChange={(e) => handleSearch(e)} />
        </InputWrapper>*/}
      <Header>
        <StyledInput ref={inputRef} onChange={(e) => handleSearch(e)} />
      </Header>
      <CardsWrapper>{renderCards()}</CardsWrapper>
    </HomeWrapper>
  );
};
export default Home;
