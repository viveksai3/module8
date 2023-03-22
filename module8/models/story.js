const mongoose = require('mongoose');
const schema = mongoose.Schema;

const storySchema = new mongoose.Schema({
    title :{type:String,required:[true,'title is required']},
    author:{type:String, required:[true,'author is required']},
    content:{type:String, required:[true,'content is required'], 
                minLength:[10,'the content should have atleast 10 characters']}
},
{timestamps:true}
);

//collection in the db is named after 'Story' in lower case and plural -> stories
module.exports = mongoose.model('Story', storySchema);

