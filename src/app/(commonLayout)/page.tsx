import BlogCard from "@/components/modules/homepage/BlogCard";
import { blogServices } from "@/services/blog.services";
import { BlogPost } from "@/types";

export default async function Home() {
  const { data } = await blogServices.getBlogPost(
    {
      isFeatured: false,
      search: "something",
    },
    {
      cache: "no-cache",
    },
  );

  const posts = data?.data;

  return (
    <div>
      {posts?.map((post: BlogPost) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}
