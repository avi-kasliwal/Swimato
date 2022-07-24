import { createContext, useEffect, useMemo, useState } from "react";
import {
  restaurantRequest,
  restaurantTransformed,
} from "./restaurants.service";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  return (
    <RestaurantsContext.Provider
      value={{
        restaurants: [1, 2, 3, 4, 5, 6],
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
