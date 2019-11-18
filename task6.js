// TASK 6 : Async & Await

function task6() {
  console.log("-----HERE BEGINS THE TASK 6-----");
}

function getMyPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("c");
    }, 1001);
  });
}

function mergeWithB(a) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + "d");
    }, 1001);
  });
}

async function asyncDemo() {
  try {
    let a = await getMyPromise();
    let ab = await mergeWithB(a);
    await task6();
    throw new Error(ab);
  } catch (err) {
    console.error(err);
  } finally {
    console.log("cd");
  }
}

asyncDemo();
