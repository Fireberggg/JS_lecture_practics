// TASK 4 : Errors
console.log("-----HERE BEGINS THE TASK 4-----");

let i = 0;
let noErrArr = [];

try {
  while (i <= 15) {
    i++;
    if (i > 10) {
      throw new Error(`${i - 1} is enough`);
    } else {
      noErrArr.push(i);
    }
  }
} catch (error) {
  console.log(noErrArr);
  console.error(error, "catch block");
} finally {
  console.log("while loop broke up, cuz 10 is enoght");
}
