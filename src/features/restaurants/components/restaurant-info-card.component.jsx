import React from "react";
import { Card } from "react-native-paper";
import styled from "styled-components";

const RestaurantCard = styled(Card)`
  background-color: white;
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: 16px;
  background-color: white;
`;

const Title = styled.Text`
  padding: 8px;
`;

const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Dominos",
    icon,
    photos = [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Domino%27s_pizza_logo.svg/120px-Domino%27s_pizza_logo.svg.png",
    ],
    address = "Supertech Village 1 Market",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Card.Content>
        <Title>{name}</Title>
      </Card.Content>
    </RestaurantCard>
  );
};

export default RestaurantInfoCard;
