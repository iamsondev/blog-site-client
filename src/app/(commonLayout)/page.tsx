import BlogCard from "@/components/modules/homepage/BlogCard";
import { blogServices } from "@/services/blog.services";
import { BlogPost } from "@/types";

export default async function Home() {
  const { data } = await blogServices.getBlogPost(
    {
      isFeatured: false,
    },
    {
      cache: "no-cache",
    },
  );

  const posts = data?.data;

  return (
    <div className="grid grid-cols-3 gap-2.5">
      {posts?.map((post: BlogPost) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}
