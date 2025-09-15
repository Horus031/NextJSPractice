import { Post } from "@/interfaces/posts.interface";
import { Metadata } from "next";
import React from "react";

type BlogDetailProps = {
  params: Promise<{ slug: string }>;
};

async function getPostDetailsBySlug(slug: string) {
  const postDetails = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${slug}`
  );
  const data = await postDetails.json();
  return data;
}

export async function generateMetadata({
  params,
}: BlogDetailProps): Promise<Metadata> {
  const { slug } = await params;

  const data: Post = await getPostDetailsBySlug(slug);

  return {
    title: `${data.title} - Next Movie`,
    description: data.body,
  };
}

const BlogDetails = async ({ params }: BlogDetailProps) => {
  const { slug } = await params;

  // const postDetails = await fetch(
  //   `https://jsonplaceholder.typicode.com/posts/${slug}`
  // );
  // const data = await postDetails.json();

  return <div>Blog Detail {slug}</div>;
};

export default BlogDetails;
