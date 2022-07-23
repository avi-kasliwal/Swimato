import { Platform, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import RestaurantInfoCard from "../components/restaurant-info-card.component";

const RestaurantsList = styled.View`
  flex-grow: 1;
  padding: ${(props) => props.theme.space[3]}; ;
`;

const SafeArea = styled.SafeAreaView`
  flex: 1;
  padding: ${Platform.OS === "ios" ? "0px" : StatusBar.currentHeight + "px"};
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]}; ;
`;

const RestaurantsScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar placeholder="Search" />
      </SearchContainer>
      <RestaurantsList>
        <RestaurantInfoCard />
      </RestaurantsList>
    </SafeArea>
  );
};

export default RestaurantsScreen;
