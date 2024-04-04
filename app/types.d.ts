export type TPost = {
  title: string;
  description?: string;
  level?: "beginner" | "middler" | "challenger";
  publishedDate?: string;
  slug: string;
};
