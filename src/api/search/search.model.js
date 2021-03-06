const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const searchSchema = new Schema(
    {
        product: { type: Schema.Types.ObjectId, ref: "product", required: true },
        notes: [{ type: 'String', trim:true }],
        favorite: {type: Boolean, trim:true},
        diary: {type: Boolean, trim:true},
        isAlergic: {type:String, trim:true, enum: ['Yes', 'No', 'Maybe']},
    },
    {
        timestamps: true
    }
);

const Search = mongoose.model('searchs', searchSchema)
module.exports = Search