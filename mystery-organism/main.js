/*
Author: Sinmi
Date: Sometime in May, 2023 
*/

/* if confused about what this program does, briefly glance through the ReadMe file in the same directory that this main.js is. Dont wanna rewrite again ~lol~
 */

// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G'];
    return dnaBases[Math.floor(Math.random() * 4)];
  };
  
// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
    const newStrand = [];
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase());
    }
    return newStrand;
};
  
/* Object contain a specific organism (P. Aequor) with different properties. specimenNum is a number used for identification of P.Aequor while dna is an array of 15 bases that represent genetic sequence of the P.Aequor organism*/
const pAequorFactory = (specimenNum, dna) => {
    const organism = {
        _specimenNum: specimenNum,
        _dna: dna,

        /* randomly changes a base in the dna sequence of organism */
        mutate() {
            /* Randomly generated base*/
            let genBase = returnRandBase();

            /* Randomly selected base from dna property. This generates
            a random number from 0 to 14 inclusive. We will use this number
            as an index in dna array to randomly choose a base */
            let ranBase = Math.floor(Math.random() * this._dna.length);

            /*Rare case of randomization failing*/
            if (genBase === this._dna[ranBase])
                console.log("mutation failed")
            
            /*replacing current randomly selected base with randomly generated base*/
            else
                this._dna[ranBase] = genBase
            
            return this._dna;
        },
        
        /* getter method for private dna variable*/
        get dnaSequence() {
            return this._dna;
        },

        get specimenNum() {
            return this._specimenNum;
        },


        /** compares the DNA Sequence of different P.aequor organisms*/
        compareDNA(pAequor) {
            let comparator = 0;
            /*getting the dna sequence for parameter's pAequor*/
            let dnaSpecies2 = pAequor.dnaSequence;

            for (let i = 0; i < this._dna.length; i++) {

                /* Compares every base at every index to check for similarity*/
                if (this._dna[i] == dnaSpecies2[i])
                    comparator++;
            }
            
            /*Chnging comparator to percentage */
            comparator = (comparator / this._dna.length) * 100;

            console.log(this._specimenNum + " and " + pAequor.specimenNum + " have " + comparator + "% DNA in common.");
        },

        /*This function returns true if the object’s .dna array contains at least 60% 'C' or 'G' bases. Otherwise, false is returned*/
        willLikelySurvive() {
            let ccounts = 0;
            let gcounts = 0;

            for (let i = 0; i < this._dna.length; i++) {

                /* Checks if a 'C' base is found in dna array*/
                if (this._dna[i] == 'C')
                    ccounts++;
                
                /*counts num of times 'G' base is found in dna sequence*/
                else if (this._dna[i] == 'G')
                    gcounts++;
            }
            
            /* changes to percentage*/ 
            ccounts = (ccounts / this._dna.length) * 100;
            gcounts = (gcounts / this._dna.length) * 100;
            
            /*Has to have at least 60% of 'C' and 'G' base to survive */
            if (gcounts >= 60 || ccounts >= 60)
                return true;
            
            else
                return false;
        }
    }

    return organism;
}

/* QUICK TESTS */
/*creating 30 instances of pAequor and storing in array. Quick tests*/
let pAequorArr = [];

for (let i = 0; i < 30; i++){
    pAequorArr[i] = pAequorFactory("x100" + i, mockUpStrand());
}


console.log("DNA Sequence of first pAequor: "
            + pAequorArr[0].dnaSequence.join(' '));

console.log("DNA Sequence of second pAequor: "
            + pAequorArr[1].dnaSequence.join(' ')+'\n');
  
console.log("Similarity percentage between both: ");
pAequorArr[0].compareDNA(pAequorArr[1]);

console.log("Mutating DNA Sequence of specimen x1000...");

console.log("DNA Sequence of first pAequor which has now mutated: "
    + pAequorArr[0].mutate().join(' '));
            
console.log("True or False? Will first pAequor survive in the wild: "
    + pAequorArr[0].willLikelySurvive());
  
  
  