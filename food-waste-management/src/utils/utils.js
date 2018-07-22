const geocodeUrl =
  "https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBpWKMJY5M-JCteqVJKcfYBjePIiauQr8I&latlng=";

const headers = {
  Accept: "application/json"
};

export const geocode = (lat, lng) =>
  fetch(`${geocodeUrl}${lat},${lng}`, { headers }).then(res => res.json());
