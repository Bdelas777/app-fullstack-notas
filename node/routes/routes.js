import express from "express";
import {
  getAllBlogs,
  getBlog,
  createBlog,
  updateBlog,
  deleteBlog,
} from "../controllers/BlogController.js";
const router = express.Router();

// get all data
router.get("/", getAllBlogs);
// get a title/content
router.get("/:id", getBlog);
// create a blog
router.post("/", createBlog);
// update blog
router.put("/:id", updateBlog);
// delete blog
router.delete("/:id", deleteBlog);

export default router;
