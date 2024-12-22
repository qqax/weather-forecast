export const fetchGeodata = (value: string) => {
  const url = new URL('https://geocoding-api.open-meteo.com/v1/search')
  url.searchParams.append('name', value)
  url.searchParams.append('count', '10')
  url.searchParams.append('language', navigator.language)
  url.searchParams.append('format', 'json')
  return fetch(url)
    .then(response => response.json())
}
