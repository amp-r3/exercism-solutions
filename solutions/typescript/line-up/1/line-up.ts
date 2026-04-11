export function format(name: string, number: number): string {
  const lastNumb = number % 10
  const lastTwoNumb = number % 100
  const isSt = lastNumb === 1 && lastTwoNumb !== 11
  const isNd = lastNumb === 2 && lastTwoNumb !== 12
  const isRd = lastNumb === 3 && lastTwoNumb !== 13
  const suffix = isSt ? 'st' : isNd ? 'nd' : isRd ? 'rd' : 'th'
  return `${name}, you are the ${number}${suffix} customer we serve today. Thank you!`
}
