import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  content: {
    type: String,
    required: true,
    trim: true,
  }, 
  category: {
    type: String,
    required: true,
    trim: true,
  }, tags: [{type: String, trim: true}] },
  { timestamps: true });

  export default mongoose.model("Post", postSchema);