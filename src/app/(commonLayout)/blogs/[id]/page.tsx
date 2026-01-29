import { blogServices } from "@/services/blog.services";
import Image from "next/image";
import { Calendar, Eye } from "lucide-react"; // আইকন ব্যবহারের জন্য
import { BlogPost } from "@/types";

export const dynamicParams = false;
type TBlogDetailsProps = {
  params: Promise<{ id: string }>;
};
export async function generateStaticParams() {
  const { data } = await blogServices.getBlogPost();
  return data?.data.map((blog: BlogPost) => ({ id: blog.id })).splice(0, 3);
}
export default async function BlogPage({ params }: TBlogDetailsProps) {
  const { id } = await params;

  const { data: blog } = await blogServices.getBlogById(id);

  if (!blog) {
    return (
      <div className="flex h-[80vh] items-center justify-center">
        <h1 className="text-2xl font-semibold text-red-500">Blog Not Found!</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto my-10 max-w-4xl px-6">
      {/* ব্লগের টাইটেল */}
      <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl text-slate-900 dark:text-slate-100">
        {blog.title}
      </h1>

      {/* মেটা ডাটা সেকশন */}
      <div className="mb-8 flex flex-wrap items-center gap-6 text-sm text-slate-500">
        <div className="flex items-center gap-2">
          <Calendar size={16} />
          <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
        </div>
        <div className="flex items-center gap-2">
          <Eye size={16} />
          <span>{blog.views} Views</span>
        </div>
        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
          Technology
        </span>
      </div>

      {/* ব্লগের ইমেজ */}
      <img
        src={
          blog.thumbnail ||
          "https://images.unsplash.com/photo-1499750310107-5fef28a66643"
        }
        alt={blog.title}
        className="h-full w-full object-cover rounded-xl"
      />

      {/* ব্লগের মেইন কন্টেন্ট */}
      <article className="prose prose-slate lg:prose-xl max-w-none dark:prose-invert">
        {/* কন্টেন্ট যদি অনেক বড় হয়, তবে ভেঙে পড়ার জন্য whitespace-pre-line ব্যবহার করতে পারেন */}
        <p className="whitespace-pre-line leading-relaxed">{blog.content}</p>
      </article>

      {/* নিচের অংশ - ব্যাক বাটন বা রিলেটেড কিছু */}
      <div className="mt-12 border-t pt-8">
        <button className="text-blue-600 hover:underline">
          ← Back to Blogs
        </button>
      </div>
    </div>
  );
}
