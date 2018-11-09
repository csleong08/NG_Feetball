const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/feetball", {useNewUrlParser:true}, 
(errs)=>console.log(errs?errs:"db gucci"));

const PlayerSchema = new mongoose.Schema({
    name: {
        type: String, 
        minlength: [3, "Player name requires a minimum of three characters"]
    },
    squadnum: {
        type: Number,
        min: [1, "Squad number cannot be less than one"]
    },
    url: {
        type: String,
        required: [true, "A player image url is required"]
    },
    nationality: {
        type: String
    },
    mktval:{
        type: Number
    },
    position: {
        type: String
    }
}, {timestamps:true});

const Player = mongoose.model('Player', PlayerSchema);

module.exports = Player;
