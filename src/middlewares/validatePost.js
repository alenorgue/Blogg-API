const validatePost = (req, res, next) => {
  const { title, content, category } = req.body;

   if (!title || !title.trim()) {
    return res.status(400).json({ message: 'Title is required' });
  }

  if (!content || !content.trim()) {
    return res.status(400).json({ message: 'Content is required' });
  }

  if (!category || !category.trim()) {
    return res.status(400).json({ message: 'Category is required' });
  }

  next();
};

export default validatePost;