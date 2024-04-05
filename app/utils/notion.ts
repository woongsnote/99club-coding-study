import { Client } from "@notionhq/client";
import {
  BlockObjectResponse,
  PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

export const notionClient = new Client({
  auth: process.env.NOTION_TOKEN,
});

const databaseId = process.env.NOTION_DATABASE_ID!;

export const getDatabaseData = async (pageSize?: number) => {
  const response = await notionClient.databases.query({
    database_id: databaseId,
    page_size: pageSize,
    sorts: [
      {
        property: "PublishedDate",
        direction: "descending",
      },
    ],
  });
  return response;
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
  return response.results[0] as PageObjectResponse | undefined;
};

export const getPageContent = async (pageId: string) => {
  const response = await notionClient.blocks.children.list({
    block_id: pageId,
  });
  return response.results as BlockObjectResponse[];
};
