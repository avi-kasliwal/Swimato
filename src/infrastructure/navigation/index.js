import React, { useContext } from "react";
import { Text } from "react-native";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import AccountNavigator from "./acount.navigator";
import AppNavigator from "./app.navigator";

const Navigation = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);
  return isAuthenticated ? <AppNavigator /> : <AccountNavigator />;
};

export default Navigation;
