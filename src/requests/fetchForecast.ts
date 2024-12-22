import { fetchWeatherApi } from 'openmeteo'
import type { Cords } from '@/assets/tsTypes.ts'

export const fetchForecast = async (cords: Cords) => {
  const params = {
    ...cords,
    'forecast_hours': 12,
    'current': ['temperature_2m', 'relative_humidity_2m', 'surface_pressure'],
    'hourly': ['temperature_2m']
  }
  const url = 'https://api.open-meteo.com/v1/forecast'
  const responses = await fetchWeatherApi(url, params)

// Helper function to form time ranges
  const range = (start: number, stop: number, step: number) =>
    Array.from({ length: (stop - start) / step }, (_, i) => start + i * step)

// Process first location. Add a for-loop for multiple locations or weather models
  const response = responses[0]

// Attributes for timezone and location
//   const utcOffsetSeconds = response.utcOffsetSeconds()
  const timezone = response.timezone()
  // const timezoneAbbreviation = response.timezoneAbbreviation()
  // const latitude = response.latitude()
  // const longitude = response.longitude()

  const hourly = response.hourly()!
  const current = response.current()!

// Note: The order of weather variables in the URL query and the indices below need to match!
  return {
    timezone: timezone,
    current: {
      time: new Date(Number(current.time()) * 1000 ),
      temperature2m: current.variables(0)!.value(),
      relativeHumidity2m: current.variables(1)!.value(),
      surfacePressure: current.variables(2)!.value(),
    },
    hourly: {
      time: range(Number(hourly.time()), Number(hourly.timeEnd()), hourly.interval()).map(
        (t) => new Date(t * 1000)
      ),
      temperature2m: hourly.variables(0)!.valuesArray()!,
    },
  }
}
