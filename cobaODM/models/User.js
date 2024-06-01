const { Schema, model } = require('mongoose')

const userSchema = new Schema({
    email: String,
    password: String,
    name: String,
    todos: [{ type: Schema.Types.ObjectId, ref: 'Todo' }]
}, {
    timestamps: true
});

module.exports = model('User', userSchema);