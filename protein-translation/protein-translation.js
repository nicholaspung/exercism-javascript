//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const translate = RNA => {
  if (!RNA) {
    return [];
  }

  const PROTEINS = [
    "Methionine",
    "Phenylalanine",
    "Leucine",
    "Serine",
    "Tyrosine",
    "Cysteine",
    "Tryptophan",
    "STOP"
  ];
  const CODONS = {
    AUG: PROTEINS[0],
    UUU: PROTEINS[1],
    UUC: PROTEINS[1],
    UUA: PROTEINS[2],
    UUG: PROTEINS[2],
    UCU: PROTEINS[3],
    UCC: PROTEINS[3],
    UCA: PROTEINS[3],
    UCG: PROTEINS[3],
    UAU: PROTEINS[4],
    UAC: PROTEINS[4],
    UGU: PROTEINS[5],
    UGC: PROTEINS[5],
    UGG: PROTEINS[6],
    UAA: PROTEINS[7],
    UAG: PROTEINS[7],
    UGA: PROTEINS[7]
  };

  let codons = [];
  let codonArray = [];
  RNA.split("").map(letter => {
    codons.push(letter);
    if (codons.length == 3) {
      codonArray.push(codons.join(""));
      codons = [];
    }
  });

  let proteins = [];
  for (let i = 0; i < codonArray.length; i += 1) {
    if (CODONS[codonArray[i]] == "STOP") {
      break;
    } else {
      if (CODONS[codonArray[i]]) {
        proteins.push(CODONS[codonArray[i]]);
      } else {
        throw new Error("Invalid codon");
      }
    }
  }

  return proteins;
};
