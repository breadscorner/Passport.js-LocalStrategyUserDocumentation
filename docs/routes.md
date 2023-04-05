# Routes

## What Are Routes?

In Passport.js, a route is a protected [endpoint](./glossary.md#endpoint) that requires authentication. Passport [middleware](./glossary.md#middleware) checks if the user is authenticated and redirects them to the login page or sends an error response if not. Each route is associated with an authentication strategy, like local or social authentication. Passport.js lets developers configure authentication strategies for each route to ensure only authenticated users access protected resources.

## Import From Passport.js

### 1. Require passport from passport.js.

This imports our modified passport module, which contains our local login strategy.  

### 2. Use app.use() to initialize passport.

`app.use(passport.initialize())`
This initializes passport so the app understands that we are using it.

### 3. Connect Passport To Sessions

`app.use(passport.session())`
By doing this we can ensure that passport connects to sessions so that we are storing the user information properly when we call the serializeUser function.

<!-- show code block of routes -->

With these three lines of code in place, we now automatically have access to 2 important functions that exist within passport: passport.authenticate and req.logout.

## Using Passport Functions Inside Routes

[Routes](./glossary.md#routes) are what allow you to control what happens when users enter URLs associated with your website. For example, "localhost:3000/" requires you to have a route for "/", while "localhost:3000/users" requires you to have a route for "/users". Users cannot access webpages that do not have routes leading towards them. As we are using the Express module for handling our routes, we will be using app.get and app.post to initialize our routes.

To read further on Express routes, [refer to this document](https://expressjs.com/en/guide/routing.html).

<!-- explain routes briefly and include a link for further reading -->

### 1. Create a GET route to access the form

```

app.get("/", (req, res) => {
    res.render("index")
})
```

By doing this, when users access your website's homepage, your app will recognize the route, and know to render the index.html file as a response, before finally sending it off to the user's browser. This is what allows users to see your website's homepage.

### 2. Create a POST route for when the user clicks the button to submit the form

```

app.post("/login") {

}
```
Here, rather than using app.get, we use app.post, because that is the method that we defined in our HTML form. As well, we use the "/login" route, because that is the action we defined in our HTML form. Therefore, when a user clicks the submit button on that form, they will activate this route.

### 3. Insert passport.authenticate into the POST "/login" route

```

app.post("/login", passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/",
    failureMessage: true,
}))
```
There are five parts to what we have done.  

passport.authenticate is a callback function that takes what the user has placed in the username and password fields, and then runs it through our passport module.  

"local" tells passport to use the local strategy we have configured.  

successRedirect means that if the username and password combination is valid, the user will be redirected to the "/" route.  

failureRedirect means that if the username and password combination is invalid, the user will be redirected to the "/" route (because we only have one route in our app; normally they'd be sent to a different route).  

Finally, failureMessage is set to "true", meaning that on a failure to validate this user, a message will be stored in req.session.messages for the server to use.  

### 4. Create a logout route and enable the logout using req.logout()

```

app.get("/logout", (req, res) => {
    req.logout((err) => {
      console.log(err);
    })
    res.redirect("/");
})
```
Here, we manage what happens when the user clicks the 'Logout' button. When req.logout, a function that belongs to the passport library, is activated, the user session that a successful passport.authenticate creates is destroyed. Because of this, the user will no longer have their username stored inside their browser's session. After this is performed successfully, res.redirect will redirect the user to the "/" route.

## Passport.authenticate explained
<!-- Explain what we have created and how these routes work -->
There is a lot that happens inside passport.authenticate. Here, we will explain what exactly it does.  

When passport.authenticate is run, it looks at the request that is sent to it. Specifically, it looks for something that matches the username and password that it requires to run a function. In this case, this would be username and password that we have passed to it through the HTML form, which will take the form req.body.username and req.body.password.

Note: They are called req.body.username and req.body.password because that's what we named the fields in our HTML, using name="username" and name="password".

Once it takes the username and password, these are placed into the asynchronous function we made to check if there is a user that has both that username and password. That function will either return a user or it will return false, and this value will be placed into a variable.

The variable is then used as a condition in an if statement. If the variable contains a user's information, we will run done(null, user). This function sends the variable into passport.serializeUser, which runs another done function: done(null, user.username). This function first creates a session that contains the user's username. After that, it activates the successRedirect of passport.authenticate(), leading the user to a new webpage.

If the variable contains false, we will run done(null, false, {message: "Your login details are not valid. Please try again."}). This activates the failureRedirect of passport.authenticate(), leading the user to a new webpage. As well, if failureRedirect is true, the message "Your login details are not valid. Please try again." will be saved in req.session.messages.



## Conclusion
<!-- celebrate -->
By the end of this, you will have created an Express website that authenticates users using your own modified version of the passport.js library, before storing the user's data in as a session using the express-session library. To see if your passport.authenticate was successful or not, you can inspect the webpage, go to the Storage tab, and then go click on LocalStorage. If there is a session stored there, then that means your passport.authenticate() and passport.serializeUser() were successful.
!!! success

[Next Page: Troubleshooting](/trouble)