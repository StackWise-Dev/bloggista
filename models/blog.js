// COLLECTION => TABLE
// DOCUMENT => ROW
// THERE ARE TWO THINGS IN MONGODB
// SCHEMA AND MODEL
// SCHEMA => SCHEMA DEFINES THE STRUCTURE OF THE COLLECTION(TABLE)
// MODEL => IS USED TO WRAP THE SCHEMA TO PERFORM CRUD OPERATION OF SCHEMA

// 1. ACCESS MONGOOSE
const mongoose = require("mongoose");

// 2. CREATE SCHEMA
const Schema = mongoose.Schema;

// 3. DEFINE SCHEMA STRUCTURE
// in my case there are three things
// (i)  blog title 
// (ii) snippet
// (iii)content
let blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
}, {timestamps: true});

// 4. CREATING MODEL
const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;

