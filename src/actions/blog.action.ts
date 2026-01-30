"use server";
import { blogServices } from "@/services/blog.services";

export const getBlog = async () => {
  return await blogServices.getBlogPost();
};
