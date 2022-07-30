import React from "react";
import MapView from "react-native-maps";
import styled from "styled-components";
import { SafeArea } from "../../../components/safe-area.component";
import Search from "../components/search.component";

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

const MapScreen = () => {
  return (
    <SafeArea>
      <Search />
      <Map />
    </SafeArea>
  );
};

export default MapScreen;
