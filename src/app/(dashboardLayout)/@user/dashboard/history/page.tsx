import HistoryTable from "@/components/modules/user/history/HIstoryTable";
import PaginationControls from "@/components/ui/pagination-controls";
import { blogServices } from "@/services/blog.services";

export default async function HistoryPage({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) {
  const { page } = await searchParams;
  const response = await blogServices.getBlogPost({ page });
  console.log(response);
  const posts = response.data?.data || [];
  const pagination = response.data?.pagination || {
    limit: 10,
    page: 1,
    total: 0,
    totalPages: 1,
  };
  return (
    <div>
      <HistoryTable posts={posts} />
      <PaginationControls meta={pagination} />
    </div>
  );
}
