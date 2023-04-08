# Routes

## Purpose Of Routes

>In Passport.js, a route is a protected [endpoint](./glossary.md#endpoint) that requires authentication. Passport [middleware](./glossary.md#middleware) checks if the user is authenticated and redirects them to the login page or sends an error response if not. Each route is associated with an authentication strategy, like local or social authentication. Passport.js lets developers configure authentication strategies for each route to ensure only authenticated users access protected resources.

## Import From Passport.js

!!! warning "Important"

    For the following instructions make sure that you are working inside of your app.js file.

### 1. Require passport from passport.js

This imports our modified passport module, which contains our local login strategy that we are exporting from inside of passport.js. Uncomment the following lines of code to allow passport.js to be used in your application.

!!! example "Code: Uncomment"

    ```js
      const passport = require("./passport");
    ```

### 2. Use app.use() to initialize passport

Right now we have the following code commented out. We will need to uncomment them to allow the application to use passport.js.

!!! example "Code: Uncomment"

    ```js
      app.use(passport.initialize());
    ```

This initializes passport so the application understands that we are using passport inside our application.

### 3. Connect Passport To Sessions

Right now we have the following code commented out. We will need to uncomment them to allow the application to use passport.js.

!!! example "Code: Uncomment"

    ```js
      app.use(passport.session());
    ```

By adding this line of code to the top of app.js we can ensure that passport connects to [sessions](./glossary.md/sessions) so that we are storing the user information properly when we call the serializeUser function.

???+ success "Middleware"

    The top of your app.js should look like this screenshot.

    ![Routing Middleware](./images/middleware.png)

By completing these steps, we now automatically have access to 2 important functions that exist within passport:

!!! example "Functions"

    ```js
      passport.authenticate()
      req.logout()
    ```

## Using Passport Functions Inside Routes

[Routes](./glossary.md#routes) are what allow you to control what happens when users enter URLs associated with your website. For example, "localhost:3000/" requires you to have a route for "/", while "localhost:3000/users" requires you to have a route for "/users". Users cannot access webpages that do not have routes leading towards them. As we are using the Express module for handling our routes, we will be using app.get and app.post to initialize our routes.

???+ warning "Express Routes"

    To read further on Express routes:

    [Express Routes](https://expressjs.com/en/guide/routing.html).

### 1. Create A GET Route

Creating a get route will allow you to access the form.

!!! example "Code"

    ```js
      app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, '/index.html'));
      })
    ```

By doing this, when users access your website's homepage, your app will recognize the route and know to respond by sending the index.html file to the user's browser. This is what allows users to see your website's homepage.

### 2. Create a POST route for when the user clicks the button to submit the form

!!! example "Code: Uncomment"

    ```js
      app.post("/login") {
        // Login logic goes here
      }
    ```

Here, rather than using app.get, we use app.post, because that is the method that we defined in our HTML form. As well, we use the "/login" route, because that is the action we defined in our HTML form. Therefore, when a user clicks the submit button on that form, they will activate this route.

???+ warning "Route Types"

    If you need further clarification about post and get routes please read this documentation before proceeding.

    [Route Types](https://expressjs.com/en/guide/routing.html)

### 3. Complete Login Route

Insert passport.authenticate into the POST "/login" route.

!!! example "Code"

    ```js
      app.post("/login", passport.authenticate("local", {
          successRedirect: "/",
          failureRedirect: "/fail",
          failureMessage: true,
      }))
    ```

There are five parts to what we have done.  

&#10004; Passport.authenticate is a callback function that takes what the user has placed in the username and password fields, and then runs it through our passport module.  

* Local function tells passport to use the local strategy we have configured.  

* The successRedirect line of code shows that if the username and password combination is valid, the user will be redirected to the "/" route.  

* The failureRedirect line of code means that if the username and password combination is invalid, the user will be redirected to the "/fail" route, which will inform the user that login failed.  

* Finally, failureMessage is set to "true", meaning that on a failure to validate this user, a message will be stored in req.session.messages for the server to use.  

### 4. Create Logout Route

A logout route needs to be created to enable the logout button. This is done by using req.logout().

!!! example "Code"

    This route will be in your app.js file below the other routes. Uncomment it out.

    ```js
      app.get("/logout", (req, res) => {
          req.logout((err) => {
            console.log(err);
          })
          res.redirect("/");
      })
    ```

Here, we manage what happens when the user clicks the 'Logout' button. When req.logout(), a function that belongs to the passport library, is activated, the user session that a successful passport.authenticate() creates is destroyed. Because of this, the user will no longer have their username stored inside their browser's session. After this is performed successfully, res.redirect() will redirect the user to the "/" route.

## Passport.authenticate

There is a lot that happens inside passport.authenticate().

??? success "Passport.authenticate"

    ![Passport.authenticate](./images/pass-auth.png)

When passport.authenticate() is run, it looks at the request that is sent to it from passport.js, more specifically the localStrategy() function.

??? success "Local Strategy Function"

    ![Local Strategy](./images/local-strat.png)

Specifically, it looks for something that matches the username and password that it requires to run a function. In this case, this would be username and password that we have passed to it through the HTML form.

??? success "HTML Form"

    ![HTML Form](./images/htmlform.png)

??? note "Accessing Username & Password"

    We access the username and password, which are located inside the body of the html, by using getUserByUsernameAndPassword function that pulls the username and password from our fake-db.

Once the function takes the username and password, these are passed into another function (getUserByUsernameAndPassword) we made to check if there is a user. It checks if a user exists that has both the username and password that was passed into the function. That function will either return a user object or 'false'.

The returned value becomes the variable 'user'.

??? success "Fake-DB Function"

    ![Fake-db Functions](./images/strat1.png)

The variable is used as a condition in an if statement.

If the variable contains a user's information, we will run done(null, user).
  
done(null, user) sends the variable into passport.serializeUser(), which runs another done function: done(null, user.username).

???+ success "serializeUser Function"

    ![serializeUser](./images/serial.png)

This function first creates a session that contains the user's username, which serves as the key for deserializeUser(), which gives you the user's data when you use 'req.user' within your app.js file. Then, it activates the successRedirect of passport.authenticate(), leading the user to a new webpage.

???+ warning "Sessions Storing"

    If you are not comfortable with storing sessions read the documentation and return to this step.

    [Sessions Storage](https://www.freecodecamp.org/news/how-web-storage-works/#:~:text=Session%20storage%20allows%20you%20to,data%20stored%20in%20session%20storage.)

???+ success "Route Redirects"

    ![Route Redirect](./images/sucfail.png)

???+ danger "Variable Equals False"

    If the variable contains false, the program will run the following code:
    
    ```js
      done(null, false, {message: "Your login details are not valid. Please try again."})
    ```

This activates the failureRedirect in passport.authenticate(), leading the user to a new webpage ("/fail") with an error. As well, if failureMessage is true, the message "Your login details are not valid. Please try again." will be saved in req.session.messages.

## Verify Successful Authentication

To see if your passport.authenticate was successful or not, you can inspect the webpage.

&nbsp;&nbsp;&nbsp;&nbsp;1.If you are on Mac, go to the Storage tab at the top of the browser. If you are on PC, right-click to Inspect the webpage, and then go to the Storage tab.

&nbsp;&nbsp;&nbsp;&nbsp;2.Click on Cookies.

&nbsp;&nbsp;&nbsp;&nbsp;3.If there is a session stored there, then that means your passport.authenticate() and passport.serializeUser() were successful.

!!! success "Sessions"

    ![Sessions Console](./images/seshcookie.png)

## Conclusion

Now that you have completed these instructions you have the ability to:

&#10004; Create an express.js website that can authenticate users using your own modified version of the passport.js library.

&#10004; Store the user's data in sessions using the express-sessions library.

&#10004; Verify that your authentication was successful by inspecting the browser webpage.

!!! success "Congratulations"

    You have created an Express web application that authenticates its users using your own modified version of the passport.js library and stored the user's data in as a session using the express-session library.

[Next Page: Troubleshooting](https://breadscorner.github.io/Passport.js-LocalStrategyUserDocumentation/trouble)
