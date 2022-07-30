import React, { useContext, useEffect, useState } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import { LocationContext } from "../../../services/location/location.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  position: absolute;
  z-index: 9;
  top: 40px;
  width: 100%;
`;

const Search = () => {
  const locationContext = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(locationContext.keyword);

  useEffect(() => {
    setSearchKeyword(locationContext.keyword);
  }, [locationContext.keyword]);

  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search For A Location"
        value={searchKeyword}
        onSubmitEditing={() => {
          locationContext.search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
        icon="map"
      />
    </SearchContainer>
  );
};

export default Search;
