import { Post } from "@/interfaces/posts.interface";
import React from "react";

type SearchParams = Promise<{ keyword: string }>;

type SearchPageProps = {
  searchParams: SearchParams;
};

const SearchPage = async ({ searchParams }: SearchPageProps) => {
  let posts: Post[] = [];
  let searchKey: string = "";

  try {
    const { keyword } = await searchParams;

    searchKey = keyword

    const result = await fetch(
      `https://jsonplaceholder.typicode.com/posts?id=${keyword}`
    );
    const data = await result.json();

    posts = Array.isArray(data) ? data : [data];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return <div>Error: {error?.message || "Đã có lỗi xảy ra"}</div>;
  }

  if (posts.length == 0) return <div>Không có kết quả cho: {searchKey}</div>

};

export default SearchPage;
