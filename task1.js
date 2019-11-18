// TASK 1 : CLOSURE
console.log("-----HERE BEGINS THE TASK 1-----");

const makeAdder = function(a) {
  return function(b) {
    return a + b;
  };
};

const addFunction = makeAdder(3);

console.log(addFunction(15));
