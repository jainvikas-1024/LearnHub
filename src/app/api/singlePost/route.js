import { MongoClient, ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(request) {
  const uri = process.env.MONGO;
  const client = new MongoClient(uri);
  try {
    const database = client.db("learnhub");
    const post = database.collection("post");

    // Get all posts
    if (!request.query.id) {
      const query = {};
      const products = await post.find(query).toArray();
      return NextResponse.json({ success: true, products });
    }

    // Get post by ID
    const postId = request.query.id;
    const queryById = { _id: new ObjectId(postId) };
    const singlePost = await post.findOne(queryById);

    if (!singlePost) {
      return NextResponse.json({ success: false, message: "Post not found" });
    }

    return NextResponse.json({ success: true, post: singlePost });
  } finally {
    // Ensure that the client will close when you finish/error
    await client.close();
  }
}
