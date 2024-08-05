// const fun1 = () => {
//     console.log("Function 1 called")
// }

// const fun2 = () => {
//     console.log("Second func called")
// }

// // fun1()
// // fun2()

// const fun3 = function (value, cb1, cb2) {
//     if (value == "first") {
//         cb1(5, 6)
//     } else { cb2(10, 23) }
// }
// const fun4 = (req, res) => {
//     console.log(req)
//     console.log(res)
// }
const fun3 = function (value, cb1, cb2) {
    if (value == "first") {
        cb1(5, 6)
    } else { cb2(10, 23) }
}
fun3("first", (a, b) => { console.log(a + b) }, (a, b) => { console.log(a + b) })
fun3("second", (a, b) => { console.log(a + b) }, (a, b) => { console.log(a + b) })