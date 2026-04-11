export type Planet = 'mercury' | 'venus' | 'earth' | 'mars' | 'jupiter' | 'saturn' | 'uranus' | 'neptune'

  const SunSystem = {
    mercury: 0.2408467,
    venus: 0.61519726,
    earth: 1,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132
  } as const 

  const EARTH_YEAR_SECONDS = 31557600

export function age(planet: Planet, seconds: number): number {
  const SCALE_FACTOR = 100
  return Math.round(seconds / (SunSystem[planet] * EARTH_YEAR_SECONDS) * SCALE_FACTOR) / SCALE_FACTOR
}
