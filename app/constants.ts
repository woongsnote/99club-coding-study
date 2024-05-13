/**
 * @constant {string} BASE_URL - The base URL for the application, depending on the environment.
 */
export const BASE_URL: string =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://99club-coding-study.vercel.app";

/**
 * @constant {string[]} PROBLEM_LEVELS - An array of problem levels.
 */
export const PROBLEM_LEVELS: string[] = [
  "All",
  "Beginner",
  "Middler",
  "Challenger",
];

/**
 * @constant {number} LATEST_POSTS - The number of latest posts to display.
 */
export const LATEST_POSTS: number = 5;
