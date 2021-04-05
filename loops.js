// A while loop that prints all even #'s from 0 - 100
let i = 0;
while(i < 100) {
  i += 2;
  console.log(i);
} 

// A while loop that prints every 3rd # going - 
// backwards from 0 - 100
let i = 100;
while(i-- >= 0) {
  if(i % 3 == 0){
    console.log(i);
  }
}


// A for loop that prints every other number from 1 - 100
for (i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

//A for loop that prints "Hello world" when the number
// is divisble by 3 and 5, prints hello when divisible
//by only 3 and world when divisible by only 5 and prints
// all other numbers as numbers
for (i = 0; i <= 100; i++){
  if(i % 3 == 0 && i % 5 == 0) {
console.log('Hello World');
  }
  else if(i % 3 == 0 ){
    console.log('Hello');
  }
  else if(i % 5 == 0 ){
    console.log('World');
  }
else{
  console.log(i);
}
}