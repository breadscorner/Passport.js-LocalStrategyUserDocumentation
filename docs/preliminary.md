# Preliminary Setup

## Purpose Of Passport.js

Before the installation process, you need to decide on the authentication strategy you want to implement first. The following instructions will guide you through the process of implementing the local strategy.

## Installation and Configuration

>### Purpose Of NPM Installation
>
>Prior to installation, initializing npm is necessary to start the process. With approximately 800,000 code packages, npm is the largest software registry available. It's also an open-source platform, meaning that it is free for all users.

### 1.Installing NPM

1.Initialize npm using the command terminal by running the following command:

!!! example "Command:"

    &nbsp;&nbsp;&nbsp;&nbsp;`npm init`

When using npm, it generates a package.json file that keeps track of all the libraries and modules utilized in your project. This feature is beneficial as it allows others to gain an understanding of what your project is reliant on, and helps to monitor which program versions are required for proper operation.

Next, install the libraries you will need to complete this project. These libraries are passport, passport-local, express, express-sessions, and nodemon.

2.To install passport.js to your local VSCode, with npm, use the following command:
<!-- Double check the code -->

!!! example "Windows:"

    &nbsp;&nbsp;&nbsp;&nbsp;`$ npm install passport passport-local express express-sessions nodemon`
<!-- screenshot of terminal with the code -->

!!! example "MacOs:"

    &nbsp;&nbsp;&nbsp;&nbsp;`npm install passport passport-local express express-sessions nodemon`
<!-- screenshot of terminal with the code -->

Running this command will install the libraries you need for the project. These files will be inside a folder called node_modules that is automatically created when you run these commands. To confirm that your files have been downloaded correctly you can check in the package.json file.
<!-- Why nodemon -->
<!-- screenshot of package.json file -->

## Setting Up Your Express Application

>### Purpose Of Express
>
>To integrate Passport.js into your project, it's necessary to establish an express application first, as Passport.js is tailored exclusively for express applications. Trying to implement passport.js without using express will create a number of edge cases that may cause issues with your program running successfully.

In this section we will teach you how top create your index.html file and app.js file.

### Create An HTML Form

#### 1.Create An HTML File

This will be the file that contains your form. This file must be inside your project folder.

!!! note "Note: This file can be named whatever you would like however we will be referring to it as index.html"

!!! example "Example: "
<!-- screenshot of file directory -->

#### 2.Structure Your HTML Document

This code allows the browser that runs this file to understand and interpret any code you write in this document.
<!-- link to html documentation -->
???+ tip "Setting Your HTML Template"
    There is a VSCode shortcut that will set your template.

    ++exclam+enter++

!!! example "Example: "
<!-- screenshot of environment with forms -->

#### 3.Create An HTML Form

This form will contain the input boxes for the user.

!!! example "Example: HTML Form"
<!-- screenshot of form -->

<!-- needs input for username and password also a submit button -->
<!-- can break down individual steps for form creation -->

#### 4.Create Logout Button

In the html form add a logout button.

### Create The Javascript File

#### 1.Create A New Javascript File

!!! note "File Location"

    This file must be inside your project folder.

???+ tip "Naming Your File"

    This file can be named whatever you would like however we will be referring to it as app.js.

???+ example "Example: "
<!-- screenshot of the folder directory -->

#### 2.Insert Code

The code snippet we have provided below can be inserted into the file and will provide the foundation of your express application.

???+ example "Example: Express Application Code"

The code block below will setup your server. This will be how your VSCode can send your code to the browser using localhost.

???+ example "Example: Server Information Code"

???+ tip "Advanced Users"

    For more advanced users, separate your code blocks into an app.js file and have your server code in a separate file called server.js.

<!-- add sessions here -->

## Starting Up Your Express Server

### Local Browser

Here you will learn how to run your program locally using your localhost.

#### 1.Script Command

Find the script in your package.json file and that will be how you command the terminal to run your application. You may change this to a command such as nodemon app.js.

!!! note "Note: Open package.json and add a script to start your express application"

<!-- screenshot of the package.json with the start -->
???+ example "Example: Package.JSON- Starter Script"
<!-- include feedback statement explaining how the script works -->
  <!-- One statement that equals the whole command to run the project -->

#### 2.Run Script To Start Server

Run the script in your command terminal to start the server.

You will now be able to see your program when you open localhost:8000. Localhost number is the port number declared in your app.js file.

???+ example "Example: Package.JSON- Port"
<!-- screenshot of the port number in app.js -->

???+ example "Example: Port Listener"

#### 3.Run Local Browser

Run the URL localhost:8000 in your browser and you will see your application displayed.

???+ question "Why Localhost:8000?"

    We are using 8000 but you may choose your own as long as you use it throughout your entire application.

Your HTML will be what is displayed in your browser window.

???+ example "Example: Browser URL"
<!-- screenshot of browser with inputs -->

## Conclusion

By the end of this you will have successfully installed all software and setup the basics of your express app: index.html, app.js, and an updated script inside your package.json file.

!!! success
<!-- What success looks like at each step(Screenshots of terminal) -->

[Next Page: Strategies](/strategies)
