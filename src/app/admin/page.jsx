import HomeCard from "@/components/HomeCard";
import { Container, Stack } from "@mui/material";

export const metadata = {
  title: "Admin Page",
  description: "admin page",
};

export default function Home() {
  return (
    <>
      <Container>
        <Stack
          spacing={4}
          alignItems={"center"}
          justifyContent={"center"}
          sx={{ height: "70vh" }}
        >
          <HomeCard route={"admin/users"} />
          <HomeCard route={"admin/posts"} />
          <HomeCard route={"admin/recipes"} />
        </Stack>
      </Container>
    </>
  );
}
