# Setup and Creation of Angular Services and Server

## How to create new Angular service

To create a new service use Angular CLI command:

```bash
ng generate service <service-name>
```

## How to run Node.js server

First cd into the server directory. Then you need to install all the dependencies that server requires. To do that run the following command:

```bash
npm install
```

Then run the following command:

```bash
node index.js
```

Server will also console log the port it is running on. By default it is **3000**.

## How to setup Angular project to use Node.js server

In order to connect Angular app and running Node.js server first you need to add proxy.conf.json file into the root of the Angular project. The content of the file should be:

```json
{
    "/api": {
      "target": "http://localhost:3000",
      "secure": false
    }
}
```

Now when you are running the Angular app with `ng serve` command you need to pass the proxy configuration file to it. To do that run the following command:

```bash
ng serve --proxy-config proxy.conf.json
```
