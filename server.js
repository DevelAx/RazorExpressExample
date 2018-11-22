// Create Express app.
const app = require('express')();

// Register the 'Razor' template engine and the default extesnion for the view-template files.
// 'Express' will automatically find the Razor module (within the `node-modules` folder) using this extension. 
app.set('view engine', "raz");

// Create the route for the "Index.raz" view-template.
// Note that we do not specify the file extension explicitly in this route because we already did it when registering the engine.
app.get('/', (req, res) => {
    const model = {
        title: "Names of the Days of the Week",
        days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    };
    res.render("./index", model);
});

// Express-app default port number.
const port = process.env.PORT || 8080;

// Starting Express-app.
const server = app.listen(port, () => {
    console.log("Server is up on port " + port);
});

// Catch Express-app errors.
server.on('error', function (e) {
    if (e.code === 'EADDRINUSE') {
        console.error('Address is in use, stopped.');
    }
});