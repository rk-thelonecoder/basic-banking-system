require('dotenv').config();
const mongoose = require("mongoose");

// - connect localhost...
const conn = mongoose.connect(`mongodb+srv://lonecoder_rk:Ramsonu123.@cluster0.fkhey.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);

// - connect mongo atlas
// const conn = mongoose.connect(process.env.DB);

module.exports = conn;