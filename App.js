import { ThemeProvider } from "styled-components";
import RestaurantsScreen from "./src/features/restaurants/screens/restaurants.screen";
import { theme } from "./src/infrastructure/theme";
import {
  useFonts as oswaldUseFonts,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import {
  useFonts as latoUseFonts,
  Lato_400Regular,
} from "@expo-google-fonts/lato";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurant.context";
import { LocationContextProvider } from "./src/services/location/location.context";

const Maps = () => {
  return (
    <View>
      <Text>Maps</Text>
    </View>
  );
};

const Settings = () => {
  return (
    <View>
      <Text>Maps</Text>
    </View>
  );
};

export default function App() {
  const [oswaldLoaded] = oswaldUseFonts({
    Oswald_400Regular,
  });

  const [latoLoaded] = latoUseFonts({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  const Tab = createBottomTabNavigator();

  return (
    <>
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <NavigationContainer>
              <Tab.Navigator
                screenOptions={({ route }) => ({
                  tabBarIcon: ({ color, size }) => {
                    let iconName;

                    if (route.name === "Restaurants") {
                      iconName = "restaurant";
                    } else if (route.name === "Maps") {
                      iconName = "map";
                    } else {
                      iconName = "ios-settings";
                    }

                    // You can return any component that you like here!
                    return (
                      <Ionicons name={iconName} size={size} color={color} />
                    );
                  },
                  tabBarActiveTintColor: "teal",
                  tabBarInactiveTintColor: "gray",
                })}
              >
                <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
                <Tab.Screen name="Maps" component={Maps} />
                <Tab.Screen name="Settings" component={Settings} />
              </Tab.Navigator>
            </NavigationContainer>
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
    </>
  );
}
