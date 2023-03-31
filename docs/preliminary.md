# Preliminary Setup

## Purpose Of Passport.js

Prior to
<!-- Brief intro to describe what you will do in this section -->
<!-- Installing libraries, setting up your express app -->
<!-- Set up html page with the form that you will use -->

## Installation and Configuration

### Purpose Of These Installations

Prior to installation, initializing npm is necessary to start the process. With approximately 800,000 code packages, npm is the largest software registry available. It's also an open-source platform, meaning that it is free for all users.

1.Initialize NPM using the command terminal by running the following command:
`npm init`

When using npm, it generates a package.json file that keeps track of all the libraries and modules utilized in your project. This feature is beneficial as it allows others to gain an understanding of what your project is reliant on, and helps to monitor which program versions are required for proper operation.

Next, install the libraries you will need to complete this project. These libraries are passport, passport-local, express, express-sessions, and nodemon.

2.To install passport.js to your local VSCode, with npm, use the following command:
<!-- Double check the code -->
Windows:

`$ npm install passport passport-local express express-sessions nodemon`
<!-- screenshot of terminal with the code -->

MacOs:

`npm install passport passport-local express express-sessions nodemon`
<!-- screenshot of terminal with the code -->

Running this command will install the libraries you need for the project. These files will be inside a folder called node_modules that is automatically created when you run these commands. To confirm that your files have been downloaded correctly you can check in the package.json file.
<!-- Why nodemon -->
<!-- screenshot of package.json file -->

## Setting Up Your Express Application

### Why do you need this?

To integrate Passport.js into your project, it's necessary to establish an express application first, as Passport.js is tailored exclusively for express applications. Trying to implement passport.js without using express will create a number of edge cases that may cause issues with your program running successfully.

In this section we will teach you how top create your index.html file and app.js file.

### Create An HTML Form

1.Create an html file inside your project folder.
This will be the file that contains your form.

!!! note "Note: This file can be named whatever you would like however we will be referring to it as index.html"

!!! example "Example: "
<!-- screenshot of file directory -->

2.Structure your html document.
This code allows the browser that runs this file to understand and interpret any code you write in this document.
<!-- link to html documentation -->
???+ tip "Tip"
    There is a VSCode shortcut "!" + "enter" will set your template

!!! example "Example: "
<!-- screenshot of environment with forms -->

3.Create an html form.
This form will contain the input boxes for the user.

!!! example "Example: HTML Form"
<!-- screenshot of form -->

<!-- needs input for username and password also a submit button -->
<!-- can break down individual steps for form creation -->

4.Create logout button in the html form.

### Creating The Javascript File

1.Create a new javascript file inside your project folder.

!!! note "Note: can be named whatever you would like however we will be referring to it as app.js"

!!! example "Example: "
<!-- screenshot of the folder directory -->

2.Insert the following code:

!!! example "Example: Express Application Code"
<!-- code block with express app -->

!!! example "Example: Server Information Code"
<!-- code block with the server information -->

!!! Note: For more advanced users separate your code blocks into an app.js and have your server code in a separate file
<!-- provide explanation after code block -->

<!-- add sessions here -->

## Starting Up Your Express Server

Here you will learn how to run your program locally using your localhost.

1.Open package.json and add a script to start express.

<!-- screenshot of the package.json with the start -->
!!! example "Example: Package.JSON- Starter Script"
<!-- include feedback statement explaining how the script works -->
  <!-- One statement that equals the whole command to run the project -->

2.Run the script in your command terminal to start the server.
You will now be able to see your program when you open localhost:8000. Localhost number is the port number declared in your app.js file.

!!! example "Example: Package.JSON- Port"
<!-- screenshot of the port number in app.js -->

!!! example "Example: Port Listener"

3.Open your browser and use the url localhost:8000.
You will be able to see your html form.

!!! example "Example: Browser URL"
<!-- screenshot of browser with inputs -->

## Conclusion

By the end of this you will have successfully installed all software and setup the basics of your express app: index.html, app.js, and an updated script inside your package.json file.

!!! success
<!-- What success looks like at each step(Screenshots of terminal) -->

[Next Page: Strategies](/strategies)
