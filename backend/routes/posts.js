const express = require("express");

const router = express.Router();

const PostController = require("../controllers/posts");

const checkAuth = require("../middleware/check-auth");

const multerFile = require("../middleware/file");

router.post("", checkAuth, multerFile, PostController.createPost);

router.put("/:id", checkAuth, multerFile, PostController.updatePost);

router.get("", PostController.getPosts);

router.get("/:id", PostController.getPost);

router.delete("/:id", checkAuth, PostController.deletePost);

module.exports = router;
