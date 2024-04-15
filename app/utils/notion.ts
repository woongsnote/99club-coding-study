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

export const getDatabaseData = async (pageSize?: number, level?: string) => {
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
};

export const getPageDataBySlug = async (slug: string) => {
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
};

export const getPageContent = async (pageId: string) => {
  const response = await notionClient.blocks.children.list({
    block_id: pageId,
  });
  return response.results as BlockObjectResponse[];
};

export const renderPageContent = async (content: BlockObjectResponse[]) => {
  const notionRenderer = new NotionRenderer({
    client: notionClient,
  });

  notionRenderer.use(hljsPlugin({}));

  return await notionRenderer.render(...content);
};
