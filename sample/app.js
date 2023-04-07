const express = require("express");
const bodyParser = require("body-parser")
const session = require("express-session")
const path = require("path");
const passport = require("./passport");
const app = express();

const port = process.env.port || 8000;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
}))

app.use(passport.initialize())
app.use(passport.session())

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
})

app.get("/fail", (req, res) => {
    console.log(req.session.messages);
    res.send("Failure to Log In.");
})

app.post("/login", passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/fail",
    failureMessage: true
}))

app.get("/logout", (req, res) => {
    req.logout((err) => {
        if(err) {
            console.log(err);
        }
    })
    res.redirect("/");
})

app.listen(port, () => {
    console.log(`Server has started on port ${port}`);
});
