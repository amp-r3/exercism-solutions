const englishAlphabet: string[] = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'] as const


export function isPangram(pangram: string): boolean {
  const clearPangramArr = [...new Set(pangram.toLowerCase().trim().replace(/[^a-z]/g, '').split('').sort())]
  
  const isPangram = clearPangramArr.length === englishAlphabet.length && clearPangramArr.every((w, i) => w === englishAlphabet[i])
  return isPangram
  
}
