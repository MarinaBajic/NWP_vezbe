# Angular Setup

In order to setup Angular it is *strongly* recommended to use **nvm**, for better version management. Via nvm you need to install **node** and **npm** (Node Package Manager).

**If you already have nvm, node and npm installed then you are all set. If not, then please follow the instructions in [this](../vezbe3/typescript_setup.md) guide before seting up Angular.**


## Installing Angular CLI

In order to setup Angular we will use **Angular CLI**. Angular CLI is a command line tool that helps us create, build and test Angular applications.

### Activate node version

Before installing Angular CLI we need to activate the node version that we want to use. For Angular 20 the node version should be v20.11.1 or newer. 

We will use version 22.17.0 of node.

``` 
nvm use 22.17.0
```

You can check which version of node you are using by running:

```
node -v
```

and for npm:

```
npm -v
```

### Install Angular CLI

We will install and use **Angular version 20**.

```
npm install -g @angular/cli@20
```

For checking all available commands run:

```
ng help
```

### Check Angular CLI version
```
ng version
```

## Creating Angular project

```
ng new my-project-name
```

Make sure for now to set the following options:

```
? Do you want to create a 'zoneless' application without zone.js (Developer Preview)? No
? Which stylesheet format would you like to use? CSS
? Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)? No
```

This should create a new folder called my-project-name with all the necessary files and folders inside it

### Running Angular project

To run Angular project in development mode, *go to the project folder* and run:
```
ng serve
```
This will start a development server on port 4200. You can access the application by going to http://localhost:4200 address in any browser.
While the server is running the application will automatically reload if you change any of the source files

If you want to stop the server press **Ctrl+C** in the terminal

### Stopping Angular project

To stop running Angular project press **Ctrl+C** in the terminal

## Creating Angular components

In order to create a new **component** go to the root directory of the project (my-project-name) and run:

```
ng generate component my-component-name
```

This will create a new folder called **my-component-name** inside the **my-project-name/src/app** folder and it will create 4 files:

- my-component-name.css
- my-component-name.html
- my-component-name.spec.ts
- my-component-name.ts

## Creating Angular classes

In order to create a new **class** called *my-class-name* inside a directory named **model** (so that the code is clean), go to the root directory of the project and run:

```
ng generate class model/my-class-name
```