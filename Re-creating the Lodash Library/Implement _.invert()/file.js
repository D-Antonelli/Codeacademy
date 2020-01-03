const invert = object => {
 //first get the entries of an object in an array
 let entries = Object.entries(object);
  
 //create a new object that will take swapped key/value pairs 
 let newObj = {};
  
 //swap key/value pairs of the array 
 entries.forEach(entry => {let temp = entry[0]; 
                           entry[0] = entry[1]; 
                           entry[1] = temp;
                           
 //record the swapped values in the new object                          
                          newObj[entry[0]] = entry[1];
                 }); 
  
  //log new object
  console.log(newObj);
  
  }
  

//create new objects
let person = {
  firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"
};

var object = { 'a': 1, 'b': 2, 'c': 1 };

//invert
invert(person);
invert(object);
