import Link from "next/link";
import Image from "next/image";
import { Eye, MessageCircle, Clock } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BlogPost } from "@/types/blog.type";
import { Badge } from "@/components/ui/badge";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Card className="group grid grid-cols-6 h-full  overflow-hidden border border-slate-200 dark:border-slate-800 bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl mx-auto px-5 mt-5">
      {/* Image Section with Overlay */}
      <div className="relative aspect-video w-full overflow-hidden">
        {post.thumbnail ? (
          <Image
            src={post.thumbnail}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-muted text-muted-foreground">
            No Image
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <Badge className="absolute left-3 top-3 bg-primary/90 backdrop-blur-sm">
          Blog
        </Badge>
      </div>

      <CardHeader className="p-5 flex-grow">
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
          <Clock size={12} />
          <span>January 27, 2026</span> {/* dynamic date use: post.createdAt */}
        </div>
        <Link href={`/blog/${post.id}`}>
          <CardTitle className="line-clamp-2 text-xl font-bold leading-tight transition-colors hover:text-primary">
            {post.title}
          </CardTitle>
        </Link>
      </CardHeader>

      <CardContent className="px-5 pb-4">
        <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
          {post.content}
        </p>
      </CardContent>

      <CardFooter className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800 p-5 pt-4">
        <div className="flex gap-4 text-sm font-medium text-slate-500">
          <span className="flex items-center gap-1.5 transition-colors hover:text-blue-500">
            <Eye size={16} /> {post.views}
          </span>
          <span className="flex items-center gap-1.5 transition-colors hover:text-green-500">
            <MessageCircle size={16} /> {post?._count?.comments ?? 0}
          </span>
        </div>
        <Link
          href={`/blog/${post.id}`}
          className="text-sm font-semibold text-primary underline-offset-4 hover:underline"
        >
          Read More
        </Link>
      </CardFooter>
    </Card>
  );
}
