const app = require('express')();

app.set('view engine', "raz");

app.get('/', (req, res) => {
    const model = {
        title: "Names of the Days of the Week",
        days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    };
    res.render("./index", model);
});

const port = process.env.PORT || 8080;

const server = app.listen(port, () => {
    console.log("Server is up on port " + port);
});

server.on('error', function (e) {
    if (e.code === 'EADDRINUSE') {
        console.error('Address is in use, stopped.');
    }
});