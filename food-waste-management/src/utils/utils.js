const geocodeUrl =
  "https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBpWKMJY5M-JCteqVJKcfYBjePIiauQr8I&latlng=";

const backendAPI = "http://localhost:8000/";

const headers = {
  Accept: "application/json"
};

export const geocode = (lat, lng) =>
  fetch(`${geocodeUrl}${lat},${lng}`, { headers }).then(res => res.json());

export const postDonors = data =>
  fetch(`${backendAPI}donors`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .catch(err => console.log(err));

export const getDonors = () =>
  fetch(`${backendAPI}donors`, { headers }).then(res => res.json());
