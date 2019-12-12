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

// export const translate = (rnaString) => {
//   const encoding = {
//     AUG: 'Methionine',
//     UUU: 'Phenylalanine',
//     UUC: 'Phenylalanine',
//     UUA: 'Leucine',
//     UUG: 'Leucine',
//     UCU: 'Serine',
//     UCC: 'Serine',
//     UCA: 'Serine',
//     UCG: 'Serine',
//     UAU: 'Tyrosine',
//     UAC: 'Tyrosine',
//     UGU: 'Cysteine',
//     UGC: 'Cysteine',
//     UGG: 'Tryptophan',
//     UAA: 'STOP',
//     UAG: 'STOP',
//     UGA: 'STOP'
//   };
//   let proteinResult = [];
//   if (rnaString) {
//     let temp = '';
//     for (let i=1; i < rnaString.length + 1; i++) {
//       temp = temp += rnaString[i-1];
//       if (i % 3 === 0) {
//         if (encoding[temp] === 'STOP') {
//           break;
//         }
//         if (encoding[temp] === undefined) {
//           throw(new Error('Invalid codon'));
//         }
//         proteinResult.push(encoding[temp]);
//         temp = '';
//       }
//     }
//   }
//   return proteinResult;
// };