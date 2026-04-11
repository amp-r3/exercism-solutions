export function isLeap(year: number): boolean {
  // const isLeap = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0)
  return new Date(year, 1, 29).getDate() === 29;
}
