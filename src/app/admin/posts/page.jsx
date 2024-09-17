import { Container } from "@mui/material";
import getData from "@/app/utils/fetchData";
import { Suspense } from "react";
import AddPostForm from "@/components/AddPostForm";
import CircularWithValueLabel from "@/app/loading";
import PostList from "@/components/PostList";

export const metadata = {
  title: "Posts Page",
  description: "posts page",
};

async function Posts() {
  const data = await getData("http://localhost:3000/api/v1/posts", {
    next: { tags: ["updatePost"] },
  });
  const posts = data.posts;

  return (
    <>
      <Suspense fallback={<CircularWithValueLabel />}>
        <Container sx={{ pb: 5 }}>
          <AddPostForm />
          <PostList data={posts} />
        </Container>
      </Suspense>
    </>
  );
}

export default Posts;
