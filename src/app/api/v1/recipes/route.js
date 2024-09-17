const data = require("../recipes/data.json");

export const dynamic = "force-dynamic";

export async function GET() {
  return Response.json(data);
}

export async function POST(req) {
  const body = await req.json();
  data.recipes.push({ ...body });

  return Response.json(data);
}
