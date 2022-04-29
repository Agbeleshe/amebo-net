var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
	first_name: {type: String, required: true},
	last_name: {type: String, required: true},
	fullname: {type: String, required: true},
	email: {type: String, required: true},
	phone: {type: String, required: true},
	bio: {type: String, required: true},
	firebase_id: {type: String, required: true},
}, {timestamps: true});

// Virtual for user's full name
UserSchema
	.virtual("fullname")
	.get(function () {
		return this.first_name + " " + this.last_name;
	});

module.exports = mongoose.model("User", UserSchema);