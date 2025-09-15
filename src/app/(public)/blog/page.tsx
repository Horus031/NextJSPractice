import React from "react";

import Link from "next/link";
import { Post } from "@/interfaces/posts.interface";



const BlogLists = async () => {
  let data: Post[] = [];
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      cache: "no-cache",
    });

    const myResponse = await fetch("http://localhost:3000//api/posts")
    const myData = await myResponse.json()

    console.log(myData)


    data = await response.json();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return (
      <div>{error?.message || "Error loading blogs. Please try again"}</div>
    );
  }


  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-4 gap-4">
        {data.map((post) => {
          return (
            <Link key={post.id} href={`/blog/${post.id}`} className="bg-white p-4 rounded shadow">
              <h3 className="text-2xl font-bold">{post.title}</h3>
              <p className="text-gray-600 line-clamp-3">
                {post.body}
              </p>
              <p className="text-blue-500 mt-2">Read more...</p>
            </Link>
          )
        })}
      </div>
    </div>
  );
};

export default BlogLists;
