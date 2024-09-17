const data = require("../data.json");
// console.log(data);

export async function GET(req, { params }) {
  const res = data.recipes.find((recipe) => recipe.id === Number(params.id));
  return Response.json(res);
}

export async function PATCH(req, { params }) {
  const { name } = await req.json();
  const index = data.recipes.findIndex(
    (recipe) => recipe.id === Number(params.id)
  );
  data.recipes[index] = {
    ...data.recipes[index],
    name,
  };

  return Response.json(data.recipes[index]);
}

export async function DELETE(req, { params }) {
  const index = data.recipes.findIndex(
    (recipe) => recipe.id === Number(params.id)
  );
  const deleted = data.recipes[index];
  data.recipes.splice(index, 1);

  return Response.json(deleted);
}
