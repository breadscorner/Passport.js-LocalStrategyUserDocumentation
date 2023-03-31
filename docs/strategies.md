# Strategies

## Set Up A Database

For the purpose of this project we will be creating a fake db. However, you can read documentation on the implementation of a real database, such as mysql or mongodb. You can swap out the fake database for a real one by following the documentation for those languages and technologies.

Link: database implementation link

### 1.Create A File

This file will be named fake-db.js.

Inside this file we will create an array containing objects. Each objects contain the username and password of the respective user.

### 2.Create a Variable

Inside the inside the fake-db.js you will create a variable.

This will contain the fake database of users and passwords that you can use to access the program.
<!-- screenshot of the code block -->

### 3.Create 2 Functions

1.For getting the user by the username or password.

2.For finding the user by the username

Both of these functions will return the entire object(username and password) associated with the requested user.
<!-- code block for first function -->
<!-- explanation of code block -->
<!-- code block for second function -->
<!-- explanation of code block -->
<!-- Note: if using another database you would code the functions differently but the logic would remain the same -->

### 4.Export Functions

This will allow you to access your database by importing the functions that query the database.
<!-- code block of the export and import codes -->

## Setting Up Passport.js

In this section you will be setting up passport so that you can use it in your app to authenticate users.

### 1.Create A File Named Passport.js

In this file you will be configuring passport for usage.
<!--  -->

### 2.Import Libraries & Files

The libraries you will bring in will be:

* Passport library
* Local passport strategy
* Functions you made for querying db in fake-db.js.
<!-- code block of the imports -->

### 3.Create A Local-Strategy Variable

To configure local strategy for authentication, you must specify the authentication criteria and define the authorization process. This involves passing the username and password through a designated function and using the result to query a mock database.

<!-- code block displaying this step -->
<!-- explain the code below -->
<!-- annotated code block with explanations on each line -->

The function will return a value that is either the user or undefined. This is used as the condition inside an if-statement. If the value is a user, you run the function done(null, user). Null indicates that there are no errors, and user tells done to run passport's login function. If the value is false, you run the function done(null, false, {message: ""}). Null indicates that there are no errors, and false tells done NOT to run passport's login function. Instead, it sends whatever message is inside the message.

If the passport's login function is run, now passport will run the serializeUser function, which we will talk about now.

### 4.Create serializeUser Function

This function stores the identifying logged in user id which in this case we have used username. This information is stored inside the sessions.
<!-- code block of serializeUser -->

### 5.Create deserializeUser Function

In this function the information that the done function inside the serialize function takes, which is the user's username, is used in deserializeUser. We use a function(name of function) from our fake-db.js to query for the user based off of their username. The returned value from that function is stored inside a variable.
<!-- code block of deserializeUser function -->

If the variable contains an object(username, password), we run done(null, user). This done function puts the user object inside req.user, which can be accessed for a future usage.

If the variable contains undefined, we run done({message: ""}, null), where the message is sent to the servers console(VSCode console) to tell the user that the function failed to retrieve a matching user with the requested username.
<!-- screenshot of console with message -->

## Export Local Login

You need to tell passport that you want to use local strategy and that you want to export passport so that it can be used in app.js.

### 1.Add Code To Export Module

Add a line of code to the bottom of passport.js.
 <!-- code block -->

By running this you modify passport to use your local login strategy. As well you can now export your modified passport to app.js.

## Conclusion
<!-- need to write -->
!!! success

[Next Page: Routes](/routes)
