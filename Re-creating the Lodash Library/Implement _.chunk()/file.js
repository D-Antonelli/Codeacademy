const chunk = (array, size=1) => {
  //create a new empty array to fill it with chunked arrays
  let chunkedArrays = [];
  
  //create a variable to indicate the finish index
  let finish = size;
  
  //loop through array with start index.
  //start and finish indexes will increment 
  for(let start=0; start<array.length; start+=size) {
    chunkedArrays.push(array.slice(start, finish));
    finish+=size;
  }
  return chunkedArrays;
}

//test
console.log(chunk([1,2,3,4,5,6,7,8,9] ,1));
