import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(request) {
  const query = request.nextUrl.searchParams.get("query");
  console.log(query);
  const uri = process.env.MONGO;
  const client = new MongoClient(uri);
  try {
    const database = client.db("learnhub");
    const post = database.collection("post");
    const products = await post
      .aggregate([
        {
          $match: {
            $or: [{ skillname: { $regex: query, $options: "i" } }],
          },
        },
      ])
      .toArray();
    return NextResponse.json({ success: true, products });
  } finally {
    await client.close();
  }
}
