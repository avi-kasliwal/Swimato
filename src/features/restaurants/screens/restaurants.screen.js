import { FlatList, View, TouchableOpacity } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import styled from "styled-components";
import RestaurantInfoCard from "../components/restaurant-info-card.component";
import { SafeArea } from "../../../components/safe-area.component";
import { useContext, useState } from "react";
import { RestaurantsContext } from "../../../services/restaurants/restaurant.context";
import Search from "../components/search.component";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import FavouritesBar from "../../../components/favourites-bar.component";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const RestaurantsScreen = ({ navigation }) => {
  const { restaurants, isLoading } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIstoggled] = useState(false);
  return (
    <SafeArea>
      <Search
        isFavouritesToggled={isToggled}
        onFavourtiesToggle={() => setIstoggled(!isToggled)}
      />
      {isLoading ? (
        <ActivityIndicator animating={true} size={"large"} />
      ) : (
        <View>
          {isToggled && (
            <FavouritesBar
              favourites={favourites}
              onNavigate={navigation.navigate}
            />
          )}
          <RestaurantList
            data={restaurants}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("RestaurantsDetail", {
                      restaurant: item,
                    })
                  }
                >
                  <RestaurantInfoCard restaurant={item} />
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item) => item.name}
          />
        </View>
      )}
    </SafeArea>
  );
};

export default RestaurantsScreen;
