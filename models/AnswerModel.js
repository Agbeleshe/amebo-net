var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var AnswerSchema = new Schema({
	body: {type: String, required: true},
	created_at: {type: String, required: true},
	updated_at: {type: String, required: true},
	question_id: {type: String, required: true},
	published_by: { type: Schema.ObjectId, ref: "User", required: true },
}, {timestamps: true});


module.exports = mongoose.model("Answer", AnswerSchema  );