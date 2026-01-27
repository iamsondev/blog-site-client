import { Button } from "@/components/ui/button";
import { blogServices } from "@/services/blog.services";

export default async function Home() {
  const { data } = await blogServices.getBlogPost();
  console.log(data);
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Button>click me</Button>
    </div>
  );
}
