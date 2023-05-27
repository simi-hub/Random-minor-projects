**Project Goals**

Context: You’re part of a research team that has found a new mysterious organism at the bottom of the ocean near hydrothermal vents. Your team names the organism, Pila aequor (P. aequor), and finds that it is only comprised of 15 DNA bases. The small DNA samples and frequency at which it mutates due to the hydrothermal vents make P. aequor an interesting specimen to study. However, P. aequor cannot survive above sea level and locating P. aequor in the deep sea is difficult and expensive. Your job is to create objects that simulate the DNA of P. aequor for your research team to study.

**Objects Include**:

_pAequorFactory(specimenNum, dna)_:The first parameter is a number (no two organisms should have the same number).The second parameter is an array of 15 DNA bases. pAequorFactory() returns an object that contains the properties specimenNum and dna that correspond to the parameters provided.

**Methods Include**:
_MockUpStrand()_: This is used to generate an array containing 15 bases to represent a single DNA strand with 15 bases.

_ReturnRandBase()_: it will randomly select a base and return the base ('A','T','C', or 'G') from an array of DNA Bases that we all know i.e A, T, C and G.

_mutate()_: This method simulates a mutation in the DNA of the organism in context, P.aequor. This is responsible for randomly selecting a base in the object’s dna property and changing the current base to a different base. Then .mutate() will return the object’s dna.

_compareDNA(pAeqor2)_: This method simulates checkinh whether two P. aequor species are the same if they have the same DNA. The behavior of compareDNA() is to compare the current pAequor‘s .dna with the passed in pAequor‘s .dna and compute how many bases are identical and in the same locations. compareDNA() does not return anything, but prints a message that states the percentage of DNA the two objects have in common. The .specimenNum to identify which pAequor objects are being compared.

_willLikelySurvive()_: This method simulates survival rate of the organism in context, P. aequor. willLikelySurvive() returns true if the object’s .dna array contains at least 60% 'C' or 'G' bases. Otherwise, false.