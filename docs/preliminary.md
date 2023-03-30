# Preliminary Setup

## What You Are Doing
Prior to
<!-- Brief intro to describe what you will do in this section -->
<!-- Installing libraries, setting up your express app -->
<!-- Set up html page with the form that you will use -->

## Installation and Configuration
<!-- add sessions to this page  line 76 -->

### Purpose Of These Installations

First you must initialize npm to simplify the installation process. Npm is the largest software registry containing approximately 800,000 code packages. Npm is open-source meaning it is free for anyone to use.

1. Initialize NPM using the command terminal by running the following command:
`npm init`

What npm does is it creates a file called package.json which keeps track of all the libraries and modules that your project uses. This allows other people to understand what your project is dependant on and monitor which versions your program requires.

Next, install the libraries you will need to complete this project. These libraries are passport, passport-local, express, express-sessions, and nodemon.

2. To install passport.js to your local VSCode, with npm, use the following command:
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
<!-- Introduce this section -->
In this section we will teach you how top create your index.html file and app.js file.

### Create An HTML Form

1. Create an html file inside your project folder.
This will be the file that contains your form.
<!-- Note: can be named whatever you would like however we will be referring to it as index.html -->
<!-- screenshot of file directory -->

2. Structure your html document.
This code allows the browser that runs this file to understand and interpret any code you write in this document.
<!-- link to html documentation -->
<!-- Note: vscode shortcut ! + enter will set your template -->
<!-- screenshot of environment with forms -->

3. Create an html form.
This form will contain the input boxes for the user.
<!-- screenshot of form -->
<!-- needs input for username and password also a submit button -->
<!-- can break down individual steps for form creation -->

### Creating The Javascript File

1. Create a new javascript file inside your project folder.
<!-- Note: can be named whatever you would like however we will be referring to it as app.js -->
<!-- screenshot of the folder directory -->

2. Insert the following code:
<!-- code block with express app -->
<!-- code block with the server information -->
<!-- Note: for more advanced users separate your code blocks into an app.js and have your server code in a sep file -->
<!-- provide explanation after code block -->

<!-- add sessions here -->

## Starting Up Your Express Server

Here you will learn how to run your program locally using your localhost.

1. Open package.json and add a script to start express.
<!-- screenshot of the package.json with the start -->
<!-- include feedback statement explaining how the script works -->
  <!-- One statement that equals the whole command to run the project -->

2. Run the script in your command terminal to start the server.
You will now be able to see your program when you open localhost<num>. Localhost number is the port number declared in your app.js file.
<!-- screenshot of the port number in app.js -->

3. Open your browser and use the url localhost:<num>.
You will be able to see your html form.
<!-- screenshot of browser with inputs -->

## Conclusion

By the end of this you will have successfully installed all software and setup the basics of your express app: index.html, app.js, and an updated script inside your package.json file.
<!-- What success looks like at each step(Screenshots of terminal) -->

[Next Page: Strategies](/strategies)
