class Order {
    constructor(orderId, price, totalItems) {
        this.orderId = orderId;
        this.price = price;
        this.totalItems = totalItems
    }

    getPrice() {
        return this.price
    }
}

const order1 = new Order(1, 2000, 4)
console.log(order1)
console.log(order1.getPrice())