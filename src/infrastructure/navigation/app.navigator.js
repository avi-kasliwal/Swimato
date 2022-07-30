import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import RestaurantsNavigator from "./restaurants.navigator";
import MapScreen from "../../features/map/screens/map.screen";

const Settings = () => {
  return (
    <View>
      <Text>Settings</Text>
    </View>
  );
};

const AppNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === "RestaurantsNavigator") {
              iconName = "restaurant";
            } else if (route.name === "Maps") {
              iconName = "map";
            } else {
              iconName = "ios-settings";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "teal",
          tabBarInactiveTintColor: "gray",
          headerShown: false,
        })}
      >
        <Tab.Screen
          name="RestaurantsNavigator"
          component={RestaurantsNavigator}
        />
        <Tab.Screen name="Maps" component={MapScreen} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
