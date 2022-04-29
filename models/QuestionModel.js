var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var QuestionSchema = new Schema({
	body: {type: String, required: true},
	created_at: {type: String, required: true},
	updated_at: {type: String, required: true},
	categories: {type: mongoose.SchemaType.Array, required: true},
	published_by: { type: Schema.ObjectId, ref: "User", required: true },
}, {timestamps: true});


module.exports = mongoose.model("Question", QuestionSchema );