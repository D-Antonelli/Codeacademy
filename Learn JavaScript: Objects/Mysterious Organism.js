// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

//P. aequor object
const pAequorFactory = (number, func) => {
    return {
    specimenNum: number,
    dna: func,
      
//.mutate() is responsible for randomly selecting a base in the object’s dna property and changing the current base to a different base. Then .mutate() will return the object’s dna.
      mutate(){
//generate random index number
      let index = Math.round(Math.random() * this.dna.length);
//get random base
      let randomlySelectedBase = returnRandBase();
  
//Find a randomly selected base that is different from the base selected by index. 
  while(randomlySelectedBase === this.dna[index]){
    randomlySelectedBase = returnRandBase();
  }
        this.dna[index] = randomlySelectedBase;   
  return this.dna;
    },
  
//Compare the DNA sequences of different P. aequor and print a message that states the percentage of DNA the two objects have in common — use the .specimenNum to identify which pAequor objects are being compared.
    compareDNA(pAequorObj) {
      if(this.specimenNum=== pAequorObj.specimenNum){
        console.log("Specimen numbers can not be identical!");
      } else {
      let countIdenticalSequences = 0;
      for(let i=0; i<this.dna.length; i++) {
        if(this.dna[i] === pAequorObj.dna[i]) {
          countIdenticalSequences++;
        }
      }
      let percentage = Math.round((100*countIdenticalSequences)/this.dna.length);
      console.log("Specimen #"+this.specimenNum+" and specimen #"+pAequorObj.specimenNum+" have "+percentage+"% DNA in common");
      
      }
    },
 
//P. aequor have a likelier chance of survival if their DNA is made up of at least 60% 'C' or 'G' bases. .willLikelySurvive() returns true if the object’s .dna array contains at least 60% 'C' or 'G' bases. Otherwise, .willLikelySurvive() returns false.
    willLikelySurvive() {
      let countBasesCOrG = 0;
      for(let i=0; i<this.dna.length; i++) {
        if(this.dna[i]==='C' || this.dna[i]==='G') { 
          countBasesCOrG++;
        }
      }
      let percentage = Math.round((100*countBasesCOrG)/this.dna.length);
      if(percentage>=60) {
        return true;
      } else {
        return false;
      }
    },   

//Create a .complementStrand() method to the factory function’s object that returns the complementary DNA strand. The rules are that 'A's match with 'T's and vice versa. Also, 'C's match with 'G's 
    complementStrand() {
      const complementArr = [];
      for(let i=0; i<this.dna.length; i++) {
        if(this.dna[i] === 'A') {
          complementArr.push('T');
        } 
        else if(this.dna[i] === 'T') {
          complementArr.push('A');
        }
        else if(this.dna[i] === 'C') {
          complementArr.push('G');
        }
        else if(this.dna[i] === 'G') {
          complementArr.push('C');
        }
      }
      return complementArr;
    }      
    }
}



//Generate 30 instances
const instancesArr = [];
for(let i=0; i<30; i++) {
  instancesArr.push(pAequorFactory(i+1, mockUpStrand()));
}
