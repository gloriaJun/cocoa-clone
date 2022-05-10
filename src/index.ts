import "./styles/index.css";

document.querySelector("#app").innerHTML = "<h1>Welcome!! Hello! World!!!</h1>";

console.log("I'm console.");

// inner.js
export const a = 1;
export const b = 2;

// export cons = 'aaa'

// // module.js
// export * as inner from "./inner";
// // or import * as inner from './inner'; export { inner };

// // user.js
// import * as module from "./module";
// console.log(module.inner.a);
