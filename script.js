const fs = require('fs');

fs.readFile('./input.txt', (err,data)=>{
if(err){
  console.log('error', err);
}

console.time('challenge 4 part 1');
 const floorsMap = data.toString().split('');


let floor = 0;

floorsMap.forEach((val) => {
  val === "(" ? floor++ : val ===")" ? floor-- :  floor

return floor;

});

console.log('Part 1:',floor);
console.timeEnd('challenge 4 part 1');
//END PART 1

//START PART 2
console.time('challenge 4 part 2');
let  floor2 =0;
let count =0;
let answer  = 0;

  floorsMap.forEach(advent=> {
  if(advent === "(" && answer === 0){
  	floor2++;
 count++;
    if(floor2 === -1){
      answer = 1;
      return true;
    }
  }
  else if(advent === ")" && answer === 0){
  	floor2--;
count++;
    if(floor2 === -1){

          answer = 1;
      return true;
    }


  }

  return floor2;
  });




  console.log('Part 2:',count);
  console.timeEnd('challenge 4 part 2');
});
