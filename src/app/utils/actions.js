"use server";
import { revalidateTag } from "next/cache";

//=======================handle POST requests============================:
export async function addPost(title, body, views, id) {
  await fetch("http://localhost:3000/api/v1/posts", {
    method: "POST",
    body: JSON.stringify({ title, body, id: Number(id), views: Number(views) }),
  });
  revalidateTag("updatePost");
}

export async function editPost(id, title) {
  await fetch(`http://localhost:3000/api/v1/posts/${id}`, {
    method: "PATCH",
    body: JSON.stringify({ title, id: Number(id) }),
  });
  revalidateTag("updatePost");
}

export async function deletePost(id) {
  await fetch(`http://localhost:3000/api/v1/posts/${id}`, { method: "DELETE" });
  revalidateTag("updatePost");
}

//=========================handle USER requests===============================:
export async function addUser(firstName, age, id) {
  await fetch("http://localhost:3000/api/v1/users", {
    method: "POST",
    body: JSON.stringify({
      firstName,
      age,
      id,
    }),
  });
  revalidateTag("updatePost");
}

export async function editUser(id, firstName) {
  await fetch(`http://localhost:3000/api/v1/users/${id}`, {
    method: "PATCH",
    body: JSON.stringify({ firstName, id: Number(id) }),
  });
  revalidateTag("updatePost");
}

export async function deleteUser(id) {
  await fetch(`http://localhost:3000/api/v1/users/${id}`, { method: "DELETE" });
  revalidateTag("updatePost");
}

//========================handle RECIPE requests==================================:
export async function addRecipe(id, name, instructions) {
  await fetch("http://localhost:3000/api/v1/recipes", {
    method: "POST",
    body: JSON.stringify({
      id,
      name,
      instructions,
    }),
  });
  revalidateTag("updatePost");
}

export async function editRecipe(id, name) {
  await fetch(`http://localhost:3000/api/v1/recipes/${id}`, {
    method: "PATCH",
    body: JSON.stringify({ name, id: Number(id) }),
  });
  revalidateTag("updatePost");
}

export async function deleteRecipe(id) {
  await fetch(`http://localhost:3000/api/v1/recipes/${id}`, {
    method: "DELETE",
  });
  revalidateTag("updatePost");
}
