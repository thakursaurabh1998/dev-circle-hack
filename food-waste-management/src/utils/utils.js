const geocodeUrl =
  "https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBpWKMJY5M-JCteqVJKcfYBjePIiauQr8I&latlng=";

const backendAPI = "http://192.168.100.5:8000/";

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

export const distance = (currentLat, currentLong, desLat, desLong) => {
  return Math.pow(
    Math.pow(currentLat - desLat, 2) + Math.pow(currentLong - desLong, 2),
    0.5
  );
};

let a = 1.1;
let b = 2.2;

export const sort = data => {
  data.forEach(chunk => {
    chunk.distance = distance(
      a,
      b,
      chunk.location.longitude,
      chunk.location.latitude
    );
  });

  data.sort((obj1, obj2) => {
    console.log(obj1.distance - obj2.distance);
    return obj1.distance - obj2.distance;
  });
};
