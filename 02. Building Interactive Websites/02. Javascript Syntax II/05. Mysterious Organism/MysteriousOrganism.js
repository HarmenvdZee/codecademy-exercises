// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,

    mutate() {
      const randomIndex = Math.floor(Math.random() * 15);
      oldBase = dna[randomIndex];
      console.log(oldBase);
      newBase = returnRandBase();
      console.log(newBase);
      while (oldBase === newBase) {
        newBase = returnRandBase();
      }
      console.log(newBase);
      dna[randomIndex] = newBase;
    },

    compareDNA(pToCompare) {
      let count = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === pToCompare.dna[i]) {
          count++;
        }
      }
      return count;
    },

    willLikelySurvive() {
      let count = this.dna.reduce((currentCount, value) => {
        if (value === "C" || value === "G") {
          currentCount++;
        }
        return currentCount;
      }, 0);
      console.log(this.dna);
      console.log(count);

      return count / this.dna.length >= 0.6;
    },
  };
};

let pArray = [];
for (let i = 0; i < 30; i++) {
  pArray.push(pAequorFactory(i, mockUpStrand()));
}
