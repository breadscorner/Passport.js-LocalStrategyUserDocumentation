# Troubleshooting

<!-- Min of 5 things that could go wrong and their solutions -->
???+ danger "Authentication Not Working"

    Check to see if you have initialized your passport with your strategy before implementing it into your routes. There are two versions of passport inside your project but only one will work. Make sure that you have imported the correct library.  

    !!! success

???+ danger "Browser Not Loading On Localhost"

    Check to see that you are using the correct port consistently throughout your application.

    Make sure you have run your script command.

    !!! success

???+ danger "Local Strategy Not Getting Called"

    If you are using the latest version, bodyParser() is deprecated. Try using bodyParser.urlencoded({extended:true}).

    If this solution does not work for you review this thread from stack overflow with some other options: 

    [Stack Overflow](https://stackoverflow.com/questions/18690354/passport-local-strategy-not-getting-called)

    !!! success

???+ danger "Issue 4"

    !!! success

???+ danger "Issue 5"

    !!! success

[Next Page: Glossary](/glossary)
