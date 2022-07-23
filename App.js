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

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
      </ThemeProvider>
    </>
  );
}
