// TASK 3 : Pure functions
console.log("-----HERE BEGINS THE TASK 3-----");

const myStr = "11-15-1944";

function edit(str) {
  const newStr = str
    .split("-")
    .reverse()
    .join(",");
  return newStr;
}

console.log(`Outcoming result: ${edit(myStr)}`);
console.log(`Incoming string (after execution): ${myStr}`);
