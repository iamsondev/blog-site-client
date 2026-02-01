import { env } from "@/env";
import { BlogData } from "@/types";
import { error } from "console";
import { cookies } from "next/headers";

const API_URL = env.API_URL;

interface serviceOptions {
  cache?: RequestCache;
  revalidate?: number;
}
interface getBlogsParams {
  isFeatured?: boolean;
  search?: string;
}

export const blogServices = {
  getBlogPost: async function (
    params?: getBlogsParams,
    options?: serviceOptions,
  ) {
    try {
      const url = new URL(`${API_URL}/posts`);
      url.searchParams.append("key", "value");

      if (params) {
        Object.entries(params).forEach(([key, value]) => {
          if (value != undefined && value != null && value != "") {
            url.searchParams.append(key, value);
          }
        });
      }

      const config: RequestInit = {};
      if (options?.cache) {
        config.cache = options.cache;
      }
      if (options?.revalidate) {
        config.next = { revalidate: options.revalidate };
      }
      config.next = { ...config.next, tags: ["blogpost"] };

      const res = await fetch(url.toString(), config);
      const data = await res.json();
      return { data: data, error: null };
    } catch (err) {
      return { data: null, error: { message: "Something went wrong" } };
    }
  },

  getBlogById: async function (id: string) {
    try {
      const res = await fetch(`${API_URL}/posts/${id}`);
      const data = await res.json();
      return { data: data, error: null };
    } catch (err) {
      return { data: null, error: { message: "Something went wrong" } };
    }
  },

  createBlogPost: async (blogData: BlogData) => {
    try {
      const cookieStore = await cookies();
      const res = await fetch(`${API_URL}/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Cookie: cookieStore.toString(),
        },
        body: JSON.stringify(blogData),
      });
      const data = await res.json();
      if (data.error) {
        return {
          data: null,
          error: { message: data.error || "Error:Post not created" },
        };
      }
      return { data: data, error: null };
    } catch (err) {
      return { data: null, error: { message: "Something went wrong" } };
    }
  },
};
