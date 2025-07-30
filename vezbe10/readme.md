## Exercise 10 - Http Requests and Routing

You can find the implementation from these exercises in the directories `vezbe10/ecommerce-http` and `vezbe10/ecommerce-routing`.
This exercise uses the base code from exercise 9 (`vezbe9/ecommerce-observables`).

### Http Requests

In this project we will extend our application with **http requests**. To make http requests we need a **server**. There is a prepared node.js server that we will use. It is very simple and it does not have the ability to permanently store data into a database (so any changes you make will be lost after you restart the server). But it is enough for our purposes. You can find the implementation of the server in the `vezbe10/server` directory.

The available endpoints are:

- `GET /api/product` - returns all products
- `POST /api/product` - adds a new product
- `PUT /api/product/:id` - updates a product with the given id

Inspecting the code of the server is not required, but it will give you better insight of what the server requires for requests and what the response consists of. To run the server follow the instrunctions from the `vezbe10/setup.md` file.

Finally, in this project we will use **http requests** and **signals** to modify functions that were previously using observables.
Implementation is available in the `vezbe10/ecommerce-http` directory.

### Routing

In this project we will continue working on our ecommerce application using code from the previous exercise. Here we will add **routing** to our application.

Created routes: 

- `/` - home page (redirects to `/list`)
- `list` - list of all products
- `create` - form for creating new product
- wildcard route to match all other routes - redirects to home

Implementation is available in the `vezbe10/ecommerce-routing` directory.


### How to run this project?

1. Clone this repository to your local machine.
2. Make sure you have followed all of the instructions in `vezbe4/angular_setup.md` to setup nvm, npm, node and angular cli.
3. Open a terminal and navigate to the root directory of the angular project (e.g. `vezbe5/ecommerce`).
4. Run `npm install` to install all dependencies.
5. If you encounter any vulnerabilities, run `npm audit fix` to fix them.
6. Run `ng serve` to start the server.
