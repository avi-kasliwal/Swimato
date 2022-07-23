import { Platform, StatusBar } from "react-native";
import styled from "styled-components";

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: teal;
  padding: ${Platform.OS === "ios" ? "0px" : StatusBar.currentHeight + "px"};
`;
