const cb = (resolve, reject) => {
    // resolve(10)
    reject("Error")
}

const p1 = new Promise(cb);
p1.then(value => console.log(value))
    .catch(err => console.log(err));

const p2 = Promise.reject("error")

p2.then(value => console.log(value))
    .catch(err => console.log(err))


