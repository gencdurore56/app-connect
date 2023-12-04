/* sophisticated_code.js */

// Complex JavaScript code demonstrating a sales management system

// Define global variables
var salesData = [];
var totalSales = 0;
var salesByCategory = {};

// Class for managing sales data
class SalesManager {
  constructor(date, category, product, quantity, price) {
    this.date = date;
    this.category = category;
    this.product = product;
    this.quantity = quantity;
    this.price = price;
  }

  calculateTotal() {
    return this.quantity * this.price;
  }

  logSale() {
    salesData.push(this);
    totalSales += this.calculateTotal();
    
    if (salesByCategory.hasOwnProperty(this.category)) {
      salesByCategory[this.category] += this.calculateTotal();
    } else {
      salesByCategory[this.category] = this.calculateTotal();
    }
  }
}

// Generate sample sales data
function generateSalesData() {
  const categories = ["Electronics", "Clothing", "Books", "Home Decor"];
  const products = ["TV", "Shirt", "Book", "Vase"];
  
  for (let i = 0; i < 1000; i++) {
    let date = new Date();
    let randomCategory = categories[Math.floor(Math.random() * categories.length)];
    let randomProduct = products[Math.floor(Math.random() * products.length)];
    let quantity = Math.floor(Math.random() * 10) + 1;
    let price = Math.random() * 100;
    
    let sale = new SalesManager(date, randomCategory, randomProduct, quantity, price);
    sale.logSale();
  }
}

// Print total sales
function printTotalSales() {
  console.log("Total Sales: $" + totalSales.toFixed(2));
}

// Print sales by category
function printSalesByCategory() {
  console.log("Sales by Category:");
  
  for (let category in salesByCategory) {
    console.log(category + ": $" + salesByCategory[category].toFixed(2));
  }
}

// Execute code
generateSalesData();
printTotalSales();
printSalesByCategory();
