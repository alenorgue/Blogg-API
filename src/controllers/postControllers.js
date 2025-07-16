import Post from "../models/postModel.js";

//Create a new post
const createPost = async (req, res) => {
  try {
    const post = new postModel(req.body);
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

//Update an existing post
const updatePost = async (req, res) => {
 try {
    const { title, content, category, tags } = req.body;
    const updated = await Post.findByIdAndUpdate(
      req.params.id,
      { title, content, category, tags },
      { new: true, runValidators: true }
    );
    if (!updated) return res.status(404).json({ message: 'Post not found' });
    res.status(200).json(updated);
  } catch (err) {
    next(err);
  }
};

//Get all posts
const getAllPosts = async (req, res) => {
  try {
    const posts = await postModel.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Get a post by ID
const getPostById = async (req, res) => {
  try {
    const post = await postModel.findById(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found' });
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Get posts by filter
const getPostsByFilter = async (req, res) => {
  try {
    const { category, tags } = req.query;
    const filter = {};
    if (category) filter.category = category;
    if (tags) filter.tags = { $in: tags.split(',') };
    const posts = await postModel.find(filter);
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Delete a post
const deletePost = async (req, res) => {
  try {
    const post = await postModel.findByIdAndDelete(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found' });
    res.status(200).json({ message: 'Post deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Export all controllers
export default {
  createPost,
  updatePost,
  getAllPosts,
  getPostById,
  getPostsByFilter,
  deletePost
};
