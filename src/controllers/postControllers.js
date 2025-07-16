import postModel from "../models/postModel";

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
}

