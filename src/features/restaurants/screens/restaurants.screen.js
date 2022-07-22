import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Searchbar } from "react-native-paper";
import RestaurantInfo from "../components/restaurant-info.component";

const RestaurantsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar placeholder="Search" />
      </View>
      <View style={styles.list}>
        <RestaurantInfo />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Platform.OS === "ios" ? 0 : StatusBar.currentHeight,
  },
  search: {
    padding: 16,
  },
  list: {
    flexGrow: 1,
    padding: 16,
  },
});

export default RestaurantsScreen;
