import { connection } from "next/server";
import { profile } from "@/data/profile";
import { getClicksCollection } from "@/lib/mongodb";

// 모든 링크의 현재 클릭 수를 { [링크 id]: 클릭 수 } 형태로 한 번에 반환
export async function GET() {
  await connection();

  const clicks = await getClicksCollection();
  const docs = await clicks.find({ _id: { $in: profile.links.map((link) => link.id) } }).toArray();

  const counts: Record<string, number> = {};
  for (const link of profile.links) counts[link.id] = 0;
  for (const doc of docs) counts[doc._id] = doc.count;

  return Response.json(counts);
}
