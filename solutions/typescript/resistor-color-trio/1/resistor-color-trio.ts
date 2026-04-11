export function decodedResistorValue(colors: string[]): string {
  const firstNumber = COLORS.indexOf(colors[0])
  const secondNumber = COLORS.indexOf(colors[1])
  const thirdNumber = COLORS.indexOf(colors[2])
  const answer = Number(String(firstNumber) + String(secondNumber)) * 10**thirdNumber
  const kiloAnswer = answer / 10**3
  const megaAnswer = kiloAnswer / 10**3
  const gigaAnswer = megaAnswer / 10**3

  if (answer >= 1000 && kiloAnswer < 1000) {
    return `${kiloAnswer} kiloohms`
  } else if(kiloAnswer >= 1000 && megaAnswer < 1000) {
    return `${megaAnswer} megaohms`
  } else if (megaAnswer >= 1000 && gigaAnswer < 1000) {
    return `${gigaAnswer} gigaohms`
  } else {
    return `${answer} ohms`
  }

  
}

const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white']
