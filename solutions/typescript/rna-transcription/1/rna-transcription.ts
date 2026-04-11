const DNANucleotides = ['A', 'C', 'G', 'T']
const DNAToRNA = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U'
} as const

type Nucleotide = keyof typeof DNAToRNA;


export function toRna(DNA: string): string {
  const DNAArray = DNA.split('')
  const isValid = DNAArray.every((n) => DNANucleotides.includes(n))

  if (isValid) {
    const RNA = DNAArray.map((n)=> DNAToRNA[n as Nucleotide])
    return RNA.join('')
  } else {
     throw new Error('Invalid input DNA.')
  }
}
