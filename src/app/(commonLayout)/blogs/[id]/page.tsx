export default async function BlogPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div>
      <h1>This is Dynamic Blog page id:{id}</h1>
    </div>
  );
}
