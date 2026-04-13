export function hey(message: string): string {
  function isLetter(letter: string): boolean {
    return letter !== letter.toUpperCase() || letter !== letter.toLowerCase()
  }
  function isUpperCase(letter: string): boolean {
    return letter === letter.toUpperCase() && letter !== letter.toLowerCase()
  }
  const messageArr = message.trim().replace(/ /g, '').split('')
  const isEmpty = messageArr.length < 1
  const lastIndex = messageArr.length - 1
  const punctuationMark = messageArr[lastIndex]
  const clearMessageArr = messageArr.filter((l)=> isLetter(l))
  const isCapital = clearMessageArr.length > 0 ? clearMessageArr.every((l) => isUpperCase(l)) : false
  const isQuestion = punctuationMark === '?' && !isCapital
  const isYell = isCapital && punctuationMark !== '?'
  const isYellQuestion = punctuationMark === '?' && isCapital
  if (isEmpty) return "Fine. Be that way!"
  if (isQuestion) return "Sure."
  if (isYell) return "Whoa, chill out!"
  if (isYellQuestion) return "Calm down, I know what I'm doing!"
  return "Whatever."
}
