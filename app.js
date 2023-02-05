// 1. CREATING EXPRESS
const express = require("express");
// 2. ACCESS THE APP AND ASSIGN TO EXPRESS
const app = express();
// IMPORT THE BLOGROUTER
const blogRouter = require("./Routes/blogRouter");
// FETCH MONGOOSE
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

// ACCESS MONGODB KEY
const URI = "mongodb+srv://blogUser:blog123@blogsdb.dwva5cz.mongodb.net/blogDatabase?retryWrites=true&w=majority";
// CONNECT TO MONGOOSE
mongoose.connect(URI)
    .then((result) => {
        // 3. LISTEN TO EXPRESS 
        app.listen(3000);
        console.log("connected to server");
    })
    .catch((error) => {
        console.log(error);
    });

// 4. SET CONFIGURATION FOR VIEW ENGINES
// VIEW ENGINE IS USED TO INSERT DYNAMIC CONTENT INTO PAGE
app.set("view engine", "ejs");
// IF YOUR FOLDER NAME IS NOT VIEW THEN SET IT LIKE THIS
// app.set("views", "yourFolderName");

// ACCESS PUBLIC FOLDER PUBLICALLY STATIC FOR ALL PAGES
app.use(express.static( __dirname + "/public"));
app.use(express.urlencoded({extended: true}));

// ACCESS THE HOME PAGE
// ONLY PASS INDEX BECAUSE FOLDER NAME "VIEWS" WILL AUTO ACCESS BY EXPRESS AND VIEW ENGINE
app.get("/", (request, response) => {
    //REDIRECT TO BLOGS
    response.redirect("/blogs");
});
app.get("/index.ejs", (request, response) => {
    response.redirect("/blogs");
});

// ABOUT PAGE
app.get("/about.ejs", (request, response) => {
    response.render("about", {title: "About"});
});

// CREATE BLOG PAGE
app.get("/createBlog.ejs", (request, response) => {
    response.render("createBlog", {title: "Create Blog"});
});

// ABOUT PAGE
app.get("/about", (request, response) => {
    response.render("about", {title: "About"});
});

// CREATE BLOG PAGE
app.get("/create", (request, response) => {
    response.render("createBlog", {title: "Create Blog"});
});


// ACCESS THE BLOGROUTER FILE FOR SINGLE COMMAND TO HANDLE ALL THE ROUTES WITHE THE SAME NAME
app.use(blogRouter);
// IF YOU HAVE SAME PATH LIKE:
// services/item.ejs
// services/blog.ejs
// the use the below one
// app.use("services/" + blogRouter);
// then remove the services from the path


// 404 PAGE
app.use((request, response) => {
    response.render("404", {title: "404"});
});

