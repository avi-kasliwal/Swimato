import React, { useContext, useEffect, useState } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import { LocationContext } from "../../../services/location/location.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]}; ;
`;

const Search = () => {
  const locationContext = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(locationContext.keyword);

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
      />
    </SearchContainer>
  );
};

export default Search;
