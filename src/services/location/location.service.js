import camelize from "camelize";
import { locations } from "./location.mock";

export const locationRequest = (searchTerm) => {
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchTerm];
    if (locationMock) {
      resolve(locationMock);
    } else {
      reject("Location Not Found");
    }
  });
};

export const locationTransform = (res) => {
  const formattedResponse = camelize(res);
  const { geometry = {} } = formattedResponse.results[0];

  const { lat, lng } = geometry.location;

  return { lat, lng };
};
