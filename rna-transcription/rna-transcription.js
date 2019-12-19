//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = strand => {
  const rna = { C: "G", G: "C", A: "U", T: "A" };

  if (!strand.length) return "";

  return [...strand].map(letter => rna[letter]).join("");
};
