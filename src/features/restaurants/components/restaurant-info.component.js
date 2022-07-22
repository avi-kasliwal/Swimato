import React from "react";
import { Text, View } from "react-native";
import { Card, Paragraph } from "react-native-paper";

const RestaurantInfo = ({ restaurant = {} }) => {
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
    <Card elevation={5}>
      <Card.Cover key={name} source={{ uri: photos[0] }} />
      <Card.Content>
        <Paragraph>{name}</Paragraph>
      </Card.Content>
    </Card>
  );
};

export default RestaurantInfo;
