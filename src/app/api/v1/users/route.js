const data = require("../users/data.json");
// console.log(data);

export const dynamic = "force-dynamic";

export async function GET() {
  return Response.json(data);
}

export async function POST(req) {
  const body = await req.json();
  data.users.push({ ...body });

  return Response.json(data);
}
