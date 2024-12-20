export type Place = {
  latitude: number;
  longitude: number;
  label: string;
}

export type Current = {
  time: Date,
  temperature2m: number,
  relativeHumidity2m: number,
  precipitation: number,
  cloudCover: number,
  surfacePressure: number,
  windSpeed10m: number,
  windDirection10m: number
}

export type Hourly = {
  time: Date[],
  temperature2m: Float32Array,
  relative_humidity_2m: Float32Array,
  precipitation_probability: Float32Array,
  surface_pressure: Float32Array,
  cloud_cover: Float32Array,
  wind_speed_10m: Float32Array,
  wind_direction_10m: Float32Array,
  uv_index: Float32Array
}
