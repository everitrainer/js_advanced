const getBalance = () => {
    let balance = 10000;

    return {
        add: (value) => { balance = balance + value },
        getBalance: () => balance
    }

}

const obj = getBalance();
console.log(obj.getBalance())
obj.add(5000)
console.log(obj.getBalance())