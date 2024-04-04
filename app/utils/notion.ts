import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_SECRET,
});

const databaseId = process.env.NOTION_DATABASE_ID ?? "";

//TODO sorts by date
export const getDatabaseData = async () => {
  const response = await notion.databases.query({
    database_id: databaseId,
    sorts: [
      {
        property: "date",
        direction: "descending",
      },
    ],
  });
  return response;
};

export const getPageData = async (pageId: string) => {
  const response = await notion.pages.retrieve({
    page_id: pageId,
  });
  return response;
};
