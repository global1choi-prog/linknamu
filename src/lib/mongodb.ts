import { MongoClient } from "mongodb";

// 개발 모드의 핫 리로드 때마다 새 연결이 생기지 않도록 클라이언트를 전역에 보관
const globalForMongo = globalThis as typeof globalThis & {
  _mongoClientPromise?: Promise<MongoClient>;
};

function getClientPromise(): Promise<MongoClient> {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("MONGODB_URI 환경 변수가 설정되지 않았습니다. .env.local을 확인하세요.");
  }

  globalForMongo._mongoClientPromise ??= new MongoClient(uri).connect();
  return globalForMongo._mongoClientPromise;
}

export type ClickDoc = {
  _id: string; // 링크 id
  count: number;
};

export async function getClicksCollection() {
  const client = await getClientPromise();
  return client.db("linknamu").collection<ClickDoc>("clicks");
}
