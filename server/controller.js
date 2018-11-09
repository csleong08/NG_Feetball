const Player = require("./models.js")

module.exports = 
{
    allPlayers: (req,res) => 
    {
        console.log("all players in controller")
        Player.find({})
            .then(data=>console.log(data)||res.json(data))
            .catch(errs=>console.log(errs)||res.json(errs))
    },
    createPlayer: (req,res) => 
    {
        console.log("create player in controller")
        Player.create(req.body)
            .then(data=>console.log(data)||res.json(data))
            .catch(errs=>console.log(errs)||res.json(errs))
    },
    onePlayer: (req,res) => 
    {
        console.log("one player in controller");
        Player.findById(req.params.player_id)
                .then(data=>console.log(data)||res.json(data))
                .catch(errs=>console.log(errs)||res.json(errs))
    },
    updatePlayer: (req,res) => 
    {
        console.log("update player in controller");
        console.log(req.body);
        Player.findByIdAndUpdate(req.params.player_id, req.body, {new:true, runValidators: true})
            .then(data=>console.log(data)||res.json(data))
            .catch(errs=>console.log(errs)||res.json(errs))
    },
    deletePlayer: (req,res) =>
    {
        console.log("delete player in controller")
        Player.findByIdAndDelete(req.params.player_id)
            .then(data=>console.log(data)||res.json(data))
            .catch(errs=>console.log(errs)||res.json(errs))
    },
    sortSquadnum: (req,res) =>
    {
        console.log("sortSquadnum in controller")
        Player.find().sort({squadnum : req.params.sort})
            .then(data=>console.log(data)||res.json(data))
            .catch(errs=>console.log(errs)||res.json(errs))
    },
    sortNationality: (req,res) =>
    {
        console.log("sortNationality in controller")
        Player.find().sort({nationality : req.params.sort})
            .then(data=>console.log(data)||res.json(data))
            .catch(errs=>console.log(errs)||res.json(errs))
    },
    sortName: (req,res) =>
    {
        console.log("sortName in controller")
        Player.find().sort({name : req.params.sort})
            .then(data=>console.log(data)||res.json(data))
            .catch(errs=>console.log(errs)||res.json(errs))
    },
    sortMktval: (req,res) =>
    {
        console.log("sortMktval in controller")
        Player.find().sort({mktval : req.params.sort})
            .then(data=>console.log(data)||res.json(data))
            .catch(errs=>console.log(errs)||res.json(errs))
    },
    sortPosition: (req,res) =>
    {
        console.log("sortPosition in controller")
        Player.find().sort({position : req.params.sort})
            .then(data=>console.log(data)||res.json(data))
            .catch(errs=>console.log(errs)||res.json(errs))
    }
}