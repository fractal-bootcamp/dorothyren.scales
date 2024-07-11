// //REFACTOR functions 

// // 1.

// // a: f(x) = x^2 + x^3 / x - (x+1)
// // b: function F(x) = a(x) / b(x)

// // a(x) = x^2 + x^3
// // b(x) = x-(x+1)

// // F(x) = a(x) / b(x)

// function a(x) {
//     return x ** 2 + x ** 3;
// }

// function b(x) {
//     return x - (x + 1);
// }

// function F(x) {
//     return a(x) / b(x)
// }

// console.log(F(2));

// 2.

// // a: g(x) = x^2 + x^3 + (x^4 -1) / x - (x+1)
// // b: function G(x) = a(x) / b(x)

// const c = x => x ^ 2 + x ^ 3 + (x ^ 4 - 1)
// const d = x => x - (x + 1)

// const G = x => c(x) / d(x)
// console.log(G(1))

function a(name) {
    return "Hello, " + name + "!";
}
console.log(a("Alice"))

function b(num) {
    return num * num
}
console.log(b(4))

function c(num) {
    return num % 2 === 0;
}
console.log(c(7))

function d(a, b) {
    if (b === 0) {
        return 0;
    }
    return a + d(a, b - 1);
}
console.log(d(3, 4))

function e(n) {
    if (n === 0) {
        return 1;
    }
    return n * e(n - 1);
}
console.log("Question 5:", e(5));