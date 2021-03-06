const dnaToRna = (dna) => {
  let rna = '';
  for (const char of dna) {
    switch (char.toUpperCase()) {
      case 'A':
        rna += 'U';
        break;
      case 'C':
        rna += 'G';
        break;
      case 'G':
        rna += 'C';
        break;
      case 'T':
        rna += 'A';
        break;
      default:
        return null;
    }
  }
  return rna;
};

// dnaToRna testing
const args = [
  'ACGTGGTCTTAA',
  'CCGTA',
  '',
  'ACNTG',
  'acgtggtttttttttcttAA',
  'ccgTA',
  'acNTG'
];
args.forEach((elem) => {
  console.log(`dnaToRna(${elem}) = ${dnaToRna(elem)}`);
});