import HistoryTable from "@/components/modules/user/history/HIstoryTable";
import { blogServices } from "@/services/blog.services";

export default async function HistoryPage() {
  const response = await blogServices.getBlogPost();
  console.log(response);
  const posts = response.data?.data || [];
  return (
    <div>
      <HistoryTable posts={posts} />
    </div>
  );
}
