import { PrismaClient } from "@prisma/client";

const handler = async (req, res) => {
  if (req.method === "GET") {
    let primsaClient = new PrismaClient();
    const latestnews = await primsaClient.news.findMany({
        take: 11,
        orderBy: {
            release_date: 'desc',
        },
      })
      res.status(200).json({ success: true, latestnews });
  }
};
export default handler;
