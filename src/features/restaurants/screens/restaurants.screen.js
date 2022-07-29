import { FlatList } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import styled from "styled-components";
import RestaurantInfoCard from "../components/restaurant-info-card.component";
import { SafeArea } from "../../../components/safe-area.component";
import { useContext } from "react";
import { RestaurantsContext } from "../../../services/restaurants/restaurant.context";
import Search from "../components/search.component";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const RestaurantsScreen = () => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);
  return (
    <SafeArea>
      <Search />
      {isLoading ? (
        <ActivityIndicator animating={true} size={"large"} />
      ) : (
        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => {
            return <RestaurantInfoCard restaurant={item} />;
          }}
          keyExtractor={(item) => item.name}
        />
      )}
    </SafeArea>
  );
};

export default RestaurantsScreen;
