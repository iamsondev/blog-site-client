"use server";
import { blogServices } from "@/services/blog.services";
import { BlogData } from "@/types";
import { updateTag } from "next/cache";

export const getBlog = async () => {
  return await blogServices.getBlogPost();
};

export const createBlogPost = async (data: BlogData) => {
  const res = await blogServices.createBlogPost(data);
  updateTag("blogpost");
  return res;
};
