const mongoose = require('mongoose');//require dependencies

const schema = new mongoose.Schema(
    {
        user: {type: String, default: ""},
        name: {type: String, default: ""},
        birthday: {type: String, default: ""},
    },
    { //metadata
        timestamps: {
            createdAt: "createdOn",
            updatedAt: "updatedOn"
        },
        toJSON: {virtuals: true},
        toObject: {virtuals: true}
    }
); //template for the data being stored in mongodb cluster

const ProfileModel = mongoose.model('profiles', schema);

module.exports = ProfileModel; //make usable in other files