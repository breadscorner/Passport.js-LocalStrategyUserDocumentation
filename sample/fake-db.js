const users = [
    {username: "Gary", password: "gg"},
    {username: "Brett", password: "bb" }
]

const getUserByUsername = (username) => {
    let user;

    users.forEach(u => {
        if (u.username == username) {
            user = u;
        }
    })

    return user;
}

const getUserByUsernameAndPassword = (username, password) => {
    let user = false;

    users.forEach(u => {
        if (u.username == username) {
            if (u.password == password) {
                user = u;
            }
        }
    })

    return user;
}

module.exports = {
    getUserByUsername,
    getUserByUsernameAndPassword
}