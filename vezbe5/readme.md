## Exercise 5

You can find the implementation of the tasks in the directory `vezbe5/ecommerce`.

Setup instructions for installing and running Angular can be found in the file `vezbe4/angular_setup.md`.

In this exercise we will upgrade the e-commerce website that can be found in `vezbe4/ecommerce` and demonstrate the use of **control flow** (@if, @for), **directives** (ngClass, ngStyle), **input** and **output** of components and **content (view) projection**.

### E-commerce Website

Look at vezbe4 (the previous exercise) for problem statement. In this exercise we will implement the same functionalities, but using different methods.

1. Create a *ProductList* component. Initialize an array of products there, instead of initializing a single product in the *Product* component. Change its template to use **@for** to create a *Product* component for each product. Change the *Product* component to take the product as an **input**.
2. Move from using simple class binding to using **ngClass** to highlight on-sale items. Have a combination of some on sale and some not on sale. Also, beside highlighting products on sale, also increase font size of product price for that product.
3. Instead of disabling the decrease quantity button when the quantity is zero, use **@if** to show the button only if it can be clicked.
4. Move the increment/decrement logic from the *Product* component to the *ProductList* component. Use a product ID to find the product and change its quantity.
5. Add **content (view) projection** to the *Product* component and pass a paragraph to it at the bootom of each product card that tells what position in array of products each product has.


### How to run this project?

1. Clone this repository to your local machine.
2. Make sure you have followed all of the instructions in `vezbe4/angular_setup.md` to setup nvm, npm, node and angular cli.
3. Open a terminal and navigate to the root directory of the angular project (e.g. `vezbe5/ecommerce`).
4. Run `npm install` to install all dependencies.
5. If you encounter any vulnerabilities, run `npm audit fix` to fix them.
6. Run `ng serve` to start the server.
