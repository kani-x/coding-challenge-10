// Task 1 - Created Product Class
class Product {
    constructor(name, id, price, stock) {
        this.name = name;
        this.id = id;
        this.price = price;
        this.stock = stock;
    }

    getDetails() {
        return `Product: ${this.name}, ID: ${this.id}, Price: $${this.price}, Stock: ${this.stock}`;
    }

    updateStock(quantity) {
        if (this.stock >= quantity) {
            this.stock -= quantity;
        } else {
            console.log("Insufficient stock!");
        }
    }
}

// Test Case for Task 1
const prod1 = new Product("Laptop", 101, 1200, 10);
console.log(prod1.getDetails()); // Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 10"

prod1.updateStock(3);
console.log(prod1.getDetails()); // Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 7"

// Task 2 - Created Order Class
class Order {
    constructor(orderId, product, quantity) {
        this.orderId = orderId;
        this.product = product;
        this.quantity = quantity;
        
        if (this.product.stock >= this.quantity) {
            this.product.updateStock(this.quantity);
        } else {
            console.log("Order cannot be placed due to insufficient stock!");
        }
    }

    getOrderDetails() {
        return `Order ID: ${this.orderId}, Product: ${this.product.name}, Quantity: ${this.quantity}, Total Price: $${this.product.price * this.quantity}`;
    }
}

// Test Case for Task 2
const order1 = new Order(501, prod1, 2);
console.log(order1.getOrderDetails()); // Expected output: "Order ID: 501, Product: Laptop, Quantity: 2, Total Price: $2400"

console.log(prod1.getDetails()); // Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 5"

// Task 3 - Created Inventory Class
class Inventory {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
    }

    listProducts() {
        this.products.forEach(product => console.log(product.getDetails()));
    }
}

// Test Case for Task 3
const inventory = new Inventory();
inventory.addProduct(prod1);
inventory.listProducts(); // Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 5"

// Task 4 - Implemented Order Management
class InventoryWithOrders extends Inventory {
    constructor() {
        super();
        this.orders = [];
    }

    placeOrder(orderId, product, quantity) {
        if (product.stock >= quantity) {
            const newOrder = new Order(orderId, product, quantity);
            this.orders.push(newOrder);
        } else {
            console.log("Order cannot be placed due to insufficient stock!");
        }
    }

    listOrders() {
        this.orders.forEach(order => console.log(order.getOrderDetails()));
    }
}

// Test Case for Task 4
const inventoryWithOrders = new InventoryWithOrders();
inventoryWithOrders.addProduct(prod1);
inventoryWithOrders.placeOrder(601, prod1, 2);
inventoryWithOrders.listOrders(); 
// Expected output: "Order ID: 601, Product: Laptop, Quantity: 2, Total Price: $2400"

console.log(prod1.getDetails());
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 3"
