import { CreateBlogFormClient } from "@/components/modules/user/createBlog/createBlogFormClient";
import { blogServices } from "@/services/blog.services";
import { BlogPost } from "@/types";

export default async function CreateBlogPage() {
  const { data } = await blogServices.getBlogPost();
  console.log(data);
  return (
    <div>
      <CreateBlogFormClient></CreateBlogFormClient>
      {data.data.map((item: BlogPost) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
}
