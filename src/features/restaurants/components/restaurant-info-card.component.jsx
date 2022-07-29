import React from "react";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Image } from "react-native";
import { Text } from "../../../components/text.component";
import { Spacer } from "../../../components/spacer.component";
import {
  Address,
  Info,
  Rating,
  Right,
  Row,
  RestaurantCard,
  RestaurantCardCover,
} from "./restaurant-info-card.styles";

const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Dominos",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Domino%27s_pizza_logo.svg/120px-Domino%27s_pizza_logo.svg.png",
    ],
    vicinity = "Supertech Village 1 Market",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
    placeId,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Row>
          <Rating>
            {ratingArray.map((_, idx) => (
              <SvgXml
                xml={star}
                width={20}
                height={20}
                key={`star-${placeId}-${idx}`}
              />
            ))}
          </Rating>
          {/* Right Side */}
          <Right>
            {isClosedTemporarily && (
              <Text variant="caption" style={{ color: "red" }}>
                CLOSED TEMPORARILY
              </Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Image style={{ width: 20, height: 20 }} source={{ uri: icon }} />
            </Spacer>
          </Right>
        </Row>
        <Address>{vicinity}</Address>
      </Info>
    </RestaurantCard>
  );
};

export default RestaurantInfoCard;
