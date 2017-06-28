# Product Inventory

[From source description](https://github.com/karan/Projects#classes)
Create an application which manages an inventory of products. Create a product class which has a price, id, and quantity on hand. Then create an inventory class which keeps track of various products and can sum up the inventory value.

## User Stories

From the problem above, we can extract it as below.

### User can manage inventories

In order to manage all inventory, there should be pages that allow user to:

- create an inventory
- edit an inventory name
- remove an inventory
- add any products to the inventory
- remove any product from the inventory
- see inventories all at once
- see which inventory contains which products
- search for product to add to the inventory

### User can manage products

To manage any products, there might be pages that allow user to:

- create/update product
- delete unwanted product

### User can see total number of product within wach inventory

This user story can be archived on the page that show which inventory contains which product

## Analyze the User Stories

### Problem Domain

The problem has only two domains: `inventory` and `product`.

```javascript
// Class: Inventory
var Inventory = function(name) {
    this.name = name;
    this.products = [];
};

// Class: Product
var Product = function(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
}
```

### User Interface
