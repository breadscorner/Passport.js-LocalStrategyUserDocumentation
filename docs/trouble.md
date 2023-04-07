# Troubleshooting

??? danger "Authentication Not Working"

    Check to see if you have initialized your passport with your strategy before implementing it into your routes. There are two versions of passport inside your project but only the one you have created and configured a strategy for will work. Make sure that you have imported the correct library.  

??? danger "Browser Not Loading On Localhost"

    Check to see that you are using the correct port consistently throughout your application.

    Make sure you have run your script command. This will be 'npm run dev'.

??? danger "Local Strategy Not Getting Called"

    If you are using the latest version, bodyParser() is deprecated. Try using bodyParser.urlencoded({extended:true}).

    If this solution does not work for you review this thread from stack overflow with some other options: 

    [Stack Overflow](https://stackoverflow.com/questions/18690354/passport-local-strategy-not-getting-called)

??? danger "Login Button Does Not Redirect"

    Double check that your route's path and method matches the path and method specified in the HTML form.

    For more information you may also like to refer to the following documentation:

    [Auth0](https://auth0.com/blog/create-a-simple-and-secure-node-express-app/)

??? danger "Session Is Not Showing In Browser"

    For this issue check your app.js. Look for the code:

      `// cookie: { secure: true }`

    This is commented out so that you can run this application on localhost. However, if you are running your app on https you will want to uncomment this line of code.

    Setting secure: true on the cookie in an Express application ensures that the cookie is only transmitted over a secure HTTPS connection. This prevents the cookie from being intercepted and stolen by attackers. It's necessary to ensure all cookies are transmitted over HTTPS when running an Express app on HTTPS.

[Next Page: Glossary](https://breadscorner.github.io/Passport.js-LocalStrategyUserDocumentation/glossary)
