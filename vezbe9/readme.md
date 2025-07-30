## Exercise 9 - Services and Observables

You can find the implementations of these exercises in the directories `vezbe9/ecommerce-services` and `vezbe9/ecommerce-observables`.

These exercises have starter code files for the application in `vezbe9/ecommerce-starter` directory.

In the starter code we have a simple application that displays a list of products (very similar to what we did in exercise 5). There is also a *template-driven form* for creating new products.

### Services

Code can be found in `vezbe9/ecommerce-services` directory.
In this project we will extend the starter code and add a service for managing products. The goal here is to move all logic for managing products from the component to the service.

We will implement three methods: 
- `getProducts()` - returns a list of products
- `addProduct(product)` - adds a new product to the list
- `changeQuantity(product_id, quantity_change)` - changes the quantity of a product

The services than need to be exported and used via dependency injection in the components.

### Observables

Code can be found in `vezbe9/ecommerce-observables` directory.
In this project we will extend the code from the previous project (ecommerce-services) and add observables. The goal here is to use observables to notify components when products are changed.

Here we will modify prevouosly mentioned methods to use observables and subscribe to them from components that need to be notified when products are changed. We will also show different ways to create observables and how to use them.


### How to run this project?

1. Clone this repository to your local machine.
2. Make sure you have followed all of the instructions in `vezbe4/angular_setup.md` to setup nvm, npm, node and angular cli.
3. Open a terminal and navigate to the root directory of the angular project (e.g. `vezbe5/ecommerce`).
4. Run `npm install` to install all dependencies.
5. If you encounter any vulnerabilities, run `npm audit fix` to fix them.
6. Run `ng serve` to start the server.
