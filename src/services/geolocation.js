export function getCurrentLatLng() {
  return new Promise(resolve => {
    // this is the API the requires a callback
    navigator.geolocation.getCurrentPosition(pos => resolve({
      lat: pos.coords.latitude,
      lng: pos.coords.longitude
    }));
  });
}