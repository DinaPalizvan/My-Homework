export default async function getData(url) {
  try {
    const response = await fetch(url, { next: { tags: ["updatePost"] } });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
