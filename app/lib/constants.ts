export const BASE_URL: string =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://99club-coding-study.vercel.app";

export const PROBLEM_LEVELS: string[] = [
  "All",
  "Beginner",
  "Middler",
  "Challenger",
];

export const LATEST_POSTS = 5;