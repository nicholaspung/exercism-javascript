//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = strand => {
  const giveRnaStrand = letter => {
    switch (letter) {
      case "G":
        return "C";
      case "C":
        return "G";
      case "T":
        return "A";
      case "A":
        return "U";
      default:
        return "";
    }
  };

  if (!strand.length) return "";

  return strand
    .split("")
    .map(letter => giveRnaStrand(letter))
    .join("");
};
