import { Container, Stack } from "@mui/material";
import getData from "../utils/fetchData";
import { Suspense } from "react";
import CircularWithValueLabel from "../loading";
import PostCard from "@/components/PostCard";
export const dynamic = "force-dynamic";

export const metadata = {
  title: "Posts Page",
  description: "posts page",
};

async function Posts() {
  const data = await getData("http://localhost:3000/api/v1/posts");
  const posts = data.posts;

  return (
    <>
      <Suspense fallback={<CircularWithValueLabel />}>
        <Container sx={{ pb: 5 }}>
          <Stack
            spacing={3}
            flexWrap={"wrap"}
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            {posts.map((post) => {
              return (
                <PostCard
                  title={post.title}
                  body={post.body}
                  tags={post.tags}
                  views={post.views}
                  id={post.id}
                  key={post.id}
                  item
                />
              );
            })}
          </Stack>
        </Container>
      </Suspense>
    </>
  );
}

export default Posts;
