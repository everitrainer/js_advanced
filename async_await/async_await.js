const fun1 = async () => {
    // throw Error("error")
    return 2;
}

const fun2 = () => {
    return 3
}
fun1().then(value => console.log(value))
    .catch(err => console.log("errrorrr", err))

const fun3 = async () => {
    let res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    console.log("inside fun3 ")
    return res.json();
}
fun3().then(value => console.log(value))
console.log(fun2())

console.log("test")

