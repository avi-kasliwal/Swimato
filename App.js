import { ThemeProvider } from "styled-components";
import { theme } from "./src/infrastructure/theme";
import {
  useFonts as oswaldUseFonts,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import {
  useFonts as latoUseFonts,
  Lato_400Regular,
} from "@expo-google-fonts/lato";
import Navigation from "./src/infrastructure/navigation";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

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
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
    </>
  );
}
