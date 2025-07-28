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

The services than needs to be exported and use via dependency injection in components.

### Observables

Code can be found in `Exercises 9/ecommerce-observables` directory.
In this project we extended code from previous project (services) and added observables. The goal here is to use observables to notify components when products are changed.

Here we modified prevouosly mentionaed methods to use observables and subscribed to them from components that need to be notified when products are changed. We also showed different ways to create observables and how to use them.


### How to run angular projects?

1. Clone this repository to your local machine.
2. Make sure you followed all the instructions in `Exercises 4/angular_setup.md` to setup nvm, npm, node and angular cli.
3. Open terminal and navigate to the root directory of angular project (e.g. `Exercises 4/stock-market`).
4. Run `npm install` to install all dependencies.
5. If you encounter any vulnerabilities, run `npm audit fix` to fix them.
6. Run `ng serve` to start the server.
