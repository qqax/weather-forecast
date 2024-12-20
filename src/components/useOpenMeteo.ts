import { fetchWeatherApi } from 'openmeteo'
import type { Place } from '@/components/tsTypes.ts'

export const useOpenMeteo = async (place: Place) => {
  const params = {
    ...place,
    'forecast_hours': 12,
    'current': ['temperature_2m', 'relative_humidity_2m', 'precipitation', 'cloud_cover', 'surface_pressure', 'wind_speed_10m', 'wind_direction_10m'],
    'hourly': ['temperature_2m', 'relative_humidity_2m', 'precipitation_probability', 'precipitation', 'surface_pressure', 'cloud_cover', 'wind_speed_10m', 'wind_direction_10m', 'uv_index']
  }
  const url = 'https://api.open-meteo.com/v1/forecast'
  const responses = await fetchWeatherApi(url, params)

// Helper function to form time ranges
  const range = (start: number, stop: number, step: number) =>
    Array.from({ length: (stop - start) / step }, (_, i) => start + i * step)

// Process first location. Add a for-loop for multiple locations or weather models
  const response = responses[0]

// Attributes for timezone and location
  const utcOffsetSeconds = response.utcOffsetSeconds()
  // const timezone = response.timezone()
  // const timezoneAbbreviation = response.timezoneAbbreviation()
  // const latitude = response.latitude()
  // const longitude = response.longitude()

  const hourly = response.hourly()!
  const current = response.current()!

// Note: The order of weather variables in the URL query and the indices below need to match!
  return {
    current: {
      time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
      temperature2m: current.variables(0)!.value(),
      relativeHumidity2m: current.variables(1)!.value(),
      precipitation: current.variables(2)!.value(),
      cloudCover: current.variables(3)!.value(),
      surfacePressure: current.variables(4)!.value(),
      windSpeed10m: current.variables(5)!.value(),
      windDirection10m: current.variables(6)!.value(),
    },
    hourly: {
      time: range(Number(hourly.time()), Number(hourly.timeEnd()), hourly.interval()).map(
        (t) => new Date((t + utcOffsetSeconds) * 1000)
      ),
      temperature2m: hourly.variables(0)!.valuesArray()!,
      relative_humidity_2m: hourly.variables(1)!.valuesArray()!,
      precipitation_probability: hourly.variables(2)!.valuesArray()!,
      surface_pressure: hourly.variables(4)!.valuesArray()!,
      cloud_cover: hourly.variables(5)!.valuesArray()!,
      wind_speed_10m: hourly.variables(6)!.valuesArray()!,
      wind_direction_10m: hourly.variables(7)!.valuesArray()!,
      uv_index: hourly.variables(8)!.valuesArray()!
    },
  }
}
