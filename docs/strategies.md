# Strategies
<!-- Main Heading
Brief overview
Subheadings as necessary
Graphics
Sep blocks instruction steps
Notes cautions and warnings as needed
Conclusion -->
## Setting Up A Database

For the purpose of this project we will be creating a fake db. However, you can read documentation on the implementation of a real database, such as mysql or mongodb. You can swap out the fake database for a real one by following the documentation for those languages and technologies.

Link: database implementation link

1. Create a file called fake-db.js.

Inside this file we will create an array containing objects. Each objects contain the username and password of the respective user.

2. Create a variable inside the fake-db.js.
This will contain the fake database of users and passwords that you can use to access the program.
<!-- screenshot of the code block -->

3. Create 2 functions. One for getting the user by the username or password. Two for finding the user by the username.
Both of these functions will return the entire object(username and password) associated with the requested user.
<!-- code block for first function -->
<!-- explanation of code block -->
<!-- code block for second function -->
<!-- explanation of code block -->
<!-- Note: if using another database you would code the functions differently but the logic would remain the same -->

4. Export functions.
This will allow you to access your database by importing the functions that query the database.
<!-- code block of the export and import codes -->

## Setting Up Passport.js

In this section you will be setting up passport so that you can use it in your app to authenticate users.

1. Import passport library, local-passport strategy, functions you made for querying db in fake-db.js.
<!-- code block of the imports -->

2. Create a variable that contains your local-strategy.
Telling localstrategy what you plan on authenticating, and telling it what you want it to do with the auth, which is taking the username and password and running it through your function and using it to query your fake db.

<!-- code block displaying this step -->
<!-- explain the code below -->
<!-- annotated code block with explanations on each line -->

The function will return a value that is either the user or undefined. This is used as the condition inside an if-statement. If the value is a user, you run the function done(null, user). Null indicates that there are no errors, and user tells done to run passport's login function. If the value is false, you run the function done(null, false, {message: ""}). Null indicates that there are no errors, and false tells done NOT to run passport's login function. Instead, it sends whatever message is inside the message.

If the passport's login function is run, now passport will run the serializeUser function, which we will talk about now.

3. Create serializeUser Function.
This function stores the identifying logged in user id which in this case we have used username. This information is stored inside the sessions.
<!-- code block of serializeUser -->

4. Create deserializeUser Function.
In this function the information that the done function inside the serialize function takes, which is the user's username, is used in deserializeUser. We use a function(name of function) from our fake-db.js to query for the user based off of their username. The returned value from that function is stored inside a variable.
<!-- code block of deserializeUser function -->

If the variable contains an object(username, password), we run done(null, user). This done function puts the user object inside req.user, which can be accessed for a future usage.

If the variable contains undefined, we run done({message: ""}, null), where the message is sent to the servers console(VSCode console) to tell the user that the function failed to retrieve a matching user with the requested username.
<!-- screenshot of console with message -->

## Conclusion
<!-- need to write -->

[Next Page: Routes](/routes)