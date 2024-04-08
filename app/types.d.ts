export type TPost = {
  title: string;
  description: string;
  level?: "beginner" | "middler" | "challenger";
  publishedDate?: string;
  slug?: string;
  problemLink?: string;
  content?: string;
};

export type TNotionPage = {
  id: string;
  properties: {
    Title: {
      title: [{ plain_text: string }];
    };
    Description: {
      rich_text: [{ plain_text: string }];
    };
    PublishedDate: { date: { start: string } };
    Level: {
      select: {
        name: TPost.level;
      };
    };
    ProblemLink: { url: string };
    Slug: {
      rich_text: [{ plain_text: string }];
    };
  };
};
