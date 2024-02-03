import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(request) {
  const uri = process.env.MONGO;
  const client = new MongoClient(uri);
  try {
    const database = client.db("learnhub");
    const post = database.collection("post");
    const query = {};
    const products = await post.find(query).toArray();
    return NextResponse.json({ success: true, products });
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

export async function POST(request) {
  let body = await request.json();
  console.log(body);
  const uri = process.env.MONGO;
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const database = client.db("learnhub");
    const inventory = database.collection("post");
    const product = await inventory.insertOne(body);
    return NextResponse.json({ product, ok: true });
  } catch (error) {
    console.error("Error adding product:", error);
    return NextResponse.json(
      { error: "Failed to add product", ok: false },
      { status: 500 }
    );
  } finally {
    await client.close();
  }
}
