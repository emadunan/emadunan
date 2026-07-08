"use client"

import dynamic from "next/dynamic";
import MainContainer from '@/components/layout/MainContainer';

const BlogsList = dynamic(() => import("@/components/blogs/BlogsList"), {
  ssr: false, // ⛔ prevent SSR so ResizeObserver works
});

export default function BlogListPage() {
  return (
    <MainContainer>
      <BlogsList />
    </MainContainer>
  );
}
