# Routes
<!-- Main Heading
Brief overview
Subheadings as necessary
Graphics
Sep blocks instruction steps
Notes cautions and warnings as needed
Conclusion -->

## Import From Passport.js

1. Require passport from passport.js.
This import our modified passport with our local login strategy.

2. Initialize passport so the app understands that we are using it.
Use app.use to initialize passport.

`app.use(passport.initialize())`

3. Connect Passport To Sessions
By doing this we can ensure that passport connects to sessions so that we are storing the user information properly when we call the serializeUser function.

`app.use(passport.session())`

Now we have access to 2 important passport functions: passport.authenticate and req.logout
<!-- show code block of routes -->

## Using Passport Functions Inside Routes

<!-- explain routes briefly and include a link for further reading -->

1. Create Route
Create login route

2. Connect Route To Form. This uses passport.authenticate.

3. Create logout route. This uses req.logout().

Passport.authenticate explained
<!-- Explain what we have created and how these routes work -->

## Conclusion
<!-- celebrate -->

[Next Page: Troubleshooting](/trouble)