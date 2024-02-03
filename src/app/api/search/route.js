import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(request) {
  const query = request.nextUrl.searchParams.get("query");
  console.log(query);
  const uri = process.env.MONGO;
  const client = new MongoClient(uri);
  try {
    const database = client.db("stock-management");
    const post = database.collection("post");
    const posts = await post
      .aggregate([
        {
          $match: {
            $or: [{ name: { $regex: query, $options: "i" } }],
          },
        },
        // {
        //   $search: {
        //     text: {
        //       query: query,
        //       path: ["slug", "quantity", "price"],
        //     },
        //   },
        // },
        {
          $sort: {
            price: 1,
          },
        },
      ])
      .toArray();
    return NextResponse.json({ success: true, posts });
  } finally {
    await client.close();
  }
}
