import React, { useContext } from "react";
import { Text } from "react-native";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import AccountNavigator from "./acount.navigator";
import AppNavigator from "./app.navigator";

const Navigation = () => {
  const { user } = useContext(AuthenticationContext);
  return user ? <AppNavigator /> : <AccountNavigator />;
};

export default Navigation;
