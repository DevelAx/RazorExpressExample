// Create Express web server app.
const app = require('express')();
// Register 'Razor' template engine and the default extesnion for the view-template files.
// 'Express' will automatically find the Razor module (within the `node-modules` folder) using this extension. 
// If you decide to skip registering the engine then you will have to explicitly specify the file extension in the route handler.
app.set('view engine', "raz");
// There is an alternative way to register Razor-Express engine (see more in Razor-Express API docs):
// const raz = require('raz');
// raz.setup(app, { register: true });

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
const port = process.env.PORT || 1337;

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