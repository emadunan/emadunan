import React from "react";
import { Masonry } from "masonic";
import BlogCard from "./BlogCard";
import { blogPosts } from "./blogs.data";

const BlogsList: React.FC = () => {
  return (
    <Masonry
      items={blogPosts} columnWidth={240}
      columnGutter={24}
      overscanBy={2}
      itemKey={(item, index) => `${index}-${item.title}`}
      render={({ index, data }) => <BlogCard key={index} {...data} />}
    />
  );
};

export default BlogsList;