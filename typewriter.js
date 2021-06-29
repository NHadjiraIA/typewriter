const sentence = "hello there from lighthouse labs";
let time = 0;
for (const char of sentence) {
  
  setTimeout(() => {
    // print the char here
    process.stdout.write(char);
    
  } ,time)
  time = time + 50
}
 
