import { Container, Stack, Typography } from "@mui/material";
import getData from "../utils/fetchData";
// import PostCard from "@/components/PostCard";
import { Suspense } from "react";
import Loading from "../loading";
import dynamic from "next/dynamic";

export const metadata={
  title: "Posts Page",
  description: "posts page"
}

const PostCard= dynamic(()=>import("@/components/PostCard"))

async function Posts() {
  const data = await getData("https://dummyjson.com/posts");
  const posts = data.posts;
  return (
    <>
      <Suspense fallback={<Loading />}>
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
