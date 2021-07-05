const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// This may need more work?
//require('mongoose-currency').loadType(mongoose);
//const Currency = mongoose.Types.Currency;

const partnerSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    featured: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

const Partner = mongoose.model('Partner', partnerSchema);

module.exports = Partner;