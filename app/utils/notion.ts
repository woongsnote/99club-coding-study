import "server-only";
import { Client } from "@notionhq/client";
import {
  BlockObjectResponse,
  DatabaseObjectResponse,
  PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { NotionRenderer } from "@notion-render/client";
import hljsPlugin from "@notion-render/hljs-plugin";
import { TNotionPage } from "@/app/types";

export const notionClient = new Client({
  auth: process.env.NOTION_TOKEN,
});

const databaseId = process.env.NOTION_DATABASE_ID!;

const queryNotionDatabase = async (
  pageSize?: number,
  level?: string
): Promise<TNotionPage[]> => {
  try {
    const response = await notionClient.databases.query({
      database_id: databaseId,
      page_size: pageSize,
      filter: {
        and: [
          {
            property: "Status",
            status: {
              equals: "Published",
            },
          },
          {
            property: "Level",
            select: {
              equals: level ?? "",
            },
          },
        ],
      },
      sorts: [
        {
          property: "PublishedDate",
          direction: "descending",
        },
      ],
    });
    return response.results as (DatabaseObjectResponse & TNotionPage)[];
  } catch (error) {
    console.error("Error occurred while fetching pages:", error);
    throw new Error("Failed to fetch pages. Please try again later.");
  }
};

export const getLatestNotionPages = async (
  maxLatestPosts: number
): Promise<TNotionPage[]> => {
  try {
    return await queryNotionDatabase(maxLatestPosts);
  } catch (error) {
    throw new Error("Failed to fetch latest posts. Please try again later.");
  }
};

export const getAllPosts = async (): Promise<TNotionPage[]> => {
  try {
    return await queryNotionDatabase();
  } catch (error) {
    throw new Error("Failed to fetch all posts. Please try again later.");
  }
};

export const getPostsByLevel = async (
  level: string
): Promise<TNotionPage[]> => {
  try {
    return await queryNotionDatabase(0, level);
  } catch (error) {
    throw new Error(`Failed to fetch ${level} posts. Please try again later.`);
  }
};

export const getPageDataBySlug = async (
  slug: string
): Promise<PageObjectResponse & TNotionPage> => {
  try {
    const response = await notionClient.databases.query({
      database_id: databaseId,
      filter: {
        property: "Slug",
        rich_text: {
          equals: slug,
        },
      },
    });
    return response.results[0] as PageObjectResponse & TNotionPage;
  } catch (error) {
    console.error("Error occurred while fetching page:", error);
    throw new Error("Failed to fetch page. Please try again later.");
  }
};

export const getPageContent = async (
  pageId: string
): Promise<BlockObjectResponse[]> => {
  try {
    const response = await notionClient.blocks.children.list({
      block_id: pageId,
    });
    return response.results as BlockObjectResponse[];
  } catch (error) {
    console.error("Error occurred while fetching page contents:", error);
    throw new Error("Failed to fetch page contents. Please try again later.");
  }
};

export const renderPageContent = async (
  content: BlockObjectResponse[]
): Promise<string> => {
  const notionRenderer = new NotionRenderer({
    client: notionClient,
  });

  notionRenderer.use(hljsPlugin({}));

  try {
    return await notionRenderer.render(...content);
  } catch (error) {
    throw new Error("Failed to render page. Please try again later");
  }
};
