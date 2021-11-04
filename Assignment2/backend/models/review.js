const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');
const mongooseAutoInc = require('mongoose-auto-increment');

const reviewSchema = new Schema({
    movie_name: {
        type: String,
        required: true,
    },
    review_content: {
        type: String,
        required: true,
    },
    rate: Number,
    date: { type: Date, default: Date.now },
});

mongooseAutoInc.initialize(mongoose.connection);
reviewSchema.plugin(mongooseAutoInc.plugin, 'Review');

const reviewModel = model('Review', reviewSchema);

module.exports = reviewModel;