export function decodedValue(dualColor: string[]): number {
  const firstColor = dualColor[0]
  const secondColor = dualColor[1]
  const answer = Number(String(COLORS.indexOf(firstColor)) + String(COLORS.indexOf(secondColor)))
  return answer
}
const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white']