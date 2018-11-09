const api = require("./controller.js");
const bp = require("body-parser");

function routes(app)
{
    app.use(bp.json());
    app.get("/api/players", api.allPlayers);
    app.post("/api/players", api.createPlayer);
    app.get("/api/players/:player_id", api.onePlayer);
    app.put("/api/players/:player_id", api.updatePlayer);
    app.delete("/api/players/:player_id", api.deletePlayer);
    app.get("/api/players/squadnum/:sort", api.sortSquadnum);
    app.get("/api/players/nationality/:sort", api.sortNationality);
    app.get("/api/players/name/:sort", api.sortName);
    app.get("/api/players/mktval/:sort", api.sortMktval);
    app.get("/api/players/position/:sort", api.sortPosition);

    return app;
}

module.exports = routes;