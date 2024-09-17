const data = require("../data.json");
// console.log(data);

export async function GET(req, { params }) {
  const res = data.users.find((user) => user.id === Number(params.id));
  return Response.json(res);
}

export async function PATCH(req, { params }) {
  const { firstName } = await req.json();
  const index = data.users.findIndex((user) => user.id === Number(params.id));
  data.users[index] = {
    ...data.users[index],
    firstName,
  };

  return Response.json(data.users[index]);
}

export async function DELETE(req, { params }) {
  const index = data.users.findIndex((user) => user.id === Number(params.id));
  const deleted = data.users[index];
  data.users.splice(index, 1);

  return Response.json(deleted);
}
