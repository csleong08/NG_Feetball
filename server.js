const xp = require("express");
const routes = require("./server/routes.js");
const app = routes(xp());
const path = require("path");

app.use(xp.static( __dirname + '/client/dist/client' ));

app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./client/dist/client/index.html"))
});

routes(app);

app.listen(8000, (errs)=>console.log(errs?errs:"gucci"));