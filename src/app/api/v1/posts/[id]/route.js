const data = require("../data.json");
// console.log(data);

export async function GET(req, { params }) {
  const res = data.posts.find((post) => Number(post.id) === Number(params.id));
  return Response.json(res);
}

export async function PATCH(req, { params }) {
  const { title, body, id } = await req.json();
  const index = data.posts.findIndex((post) => post.id === Number(params.id));
  data.posts[index] = {
    ...data.posts[index],
    id,
    title,
    body,
  };

  return Response.json(data.posts[index]);
}

export async function DELETE(req, { params }) {
  try {
    const index = data.posts.findIndex((post) => post.id === Number(params.id));
    data.posts.splice(index, 1);
    return Response.json(data);
  } catch (error) {
    console.log(error);
  }
}
