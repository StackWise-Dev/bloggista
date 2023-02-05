// REQUIRE THE EXPRESS
const express = require("express");
// REQUIRE THE CONTROLLER FILE
const controller = require("../controllers/blogController");
// CREATING ROUTER FOR THE SAME FILES
const router = express.Router();


// BELOW ALL FILES SHARES A COMMON ROUTE KEYWORD WHICH IS "blogs"
// FETCH ALL BLOGS
router.get("/blogs", controller.index_blog);

// STORING DATA TO MONGODB
router.post("/blogs", controller.save_blog);

// GET RECORD BASED ON ID
router.get("/blogs/:id", controller.findbyid_blog);

// DELETE THE RECORD
router.delete("/blogs/:id", controller.delete_blog);

// EXPORT THE ROUTER TO ACCESS IN APP.JS
module.exports = router;