function syncFunction() {
    console.log("Sync function executed");
}

function asyncFunction(){
    setTimeout(()=> {
        console.log("ASync function executed");
    }, 1000);
}

// syncFunction();
// asyncFunction();
// console.log("code after function calls")

// function callbackHell(){
//     setTimeout(()=>{
//         console.log("first callback");
//         setTimeout(()=>{
//             console.log("second callback");
//             setTimeout(()=>{
//                 console.log("third callback");
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }

// callbackHell();


// function promiseChain() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         console.log("First promise");
//         resolve();
//       }, 1000);
//     })
//       .then(() => {
//         return new Promise((resolve) => {
//           setTimeout(() => {
//             console.log("Second promise");
//             resolve();
//           }, 1000);
//         });
//       })
//       .then(() => {
//         return new Promise((resolve) => {
//           setTimeout(() => {
//             console.log("Third promise");
//             resolve();
//           }, 1000);
//         });
//       });
//   }

//   promiseChain();

// async function asyncAwaitExample() {
//     console.log("start of an async function");

//     await new Promise(resolve => setTimeout(resolve, 1000));
//     console.log("after 1 sec");

//     await new Promise(resolve => setTimeout(resolve, 1000));
//     console.log('after 2 seconds');

//     console.log('end of async function');
// }

// asyncAwaitExample();
// console.log("Code after async function call");


// async function sequentialFetch() {
//     const start = Date.now();
//     const response1 = await fetch('https://api.example.com/data1');
//     const response2 = await fetch('https://api.example.com/data2');
//     console.log(`Sequential fetch took ${Date.now() - start} ms`);
//   }

//   sequentialFetch();

//   async function parallelFetch() {
//     const start = Date.now();
//     const [response1, response2] = await Promise.all([
//       fetch('https://api.example.com/data1'),
//       fetch('https://api.example.com/data2')
//     ]);
//     console.log(`Parallel fetch took ${Date.now() - start} ms`);
//   }

//   parallelFetch();

function simulateAsyncOperation(shouldSucceed) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldSucceed) {
          resolve("Operation successful");
        } else {
          reject(new Error("Operation failed"));
        }
      }, 1000);
    });
  }


  async function handleAsyncErrors() {
    try {
      console.log(await simulateAsyncOperation(true));
      console.log(await simulateAsyncOperation(false));
    } catch (error) {
      console.error("Caught an error:", error.message);
    }
    console.log("Continuing after error");
  }
  
handleAsyncErrors();
