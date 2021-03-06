const mongoose = require("mongoose");

const flatSchema = new mongoose.Schema({
    id:{type: Number},
    block:{type: String},
    flatNo:{type: String},
    image:{type: String}
},
{
    versionkey: false,
    timestamps: true
})

module.exports = mongoose.model("flat", flatSchema)