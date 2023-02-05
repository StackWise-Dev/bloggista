// ACCESS BLOG SCHEMA FILE
const Blog = require("../models/blog");

const index_blog = (request, response) => {
    Blog.find()
        .then((result) => {
            // get to the home page
            // pass title and then blogs returned in result
            response.render("index", {title: "Home", blogs: result});
        })
};

const save_blog = (request, response) => {
    let blog = new Blog(request.body);
    blog.save()
        .then(() => {
            response.redirect("/blogs");
        })
        .catch((error) => {
            console.log(error);
        })
};

const findbyid_blog = (request, response) => {
    const id = request.params.id;
    Blog.findById(id)
        .then((result) => {
            response.render("oneBlogDetail", { blogs: result, title: "Single Blog"});
        })
        .catch((error) => {
            response.status(404).render("404", {title: "Page not found."});
        })
};

const delete_blog = (request, response) => {
    // here we recieve the id and then the server will delete blog related to that id
    // the server send the data in json format and then we will perform operations on that data in oneBlogDetail.ejs
    const id = request.params.id;
    Blog.findByIdAndDelete(id)
        .then((result) => {
            response.json({redirect: "/blogs"});
        })
        .catch((error) => {
            console.log(error);
        });
};


module.exports = {
    index_blog,
    save_blog,
    findbyid_blog,
    delete_blog
};


