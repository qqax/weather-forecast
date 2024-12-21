export const temperatureToHSL = (temperature: number) => {
  const minHSL = 360
  const adjustedTemp = temperature + 40
  return minHSL - ((80 < adjustedTemp ? 80 : 0 > adjustedTemp ? 0 : adjustedTemp) / 80 * minHSL)
}
