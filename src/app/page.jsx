import HomeCard from "@/components/HomeCard";
import { Container, Stack, Typography } from "@mui/material";

export const metadata={
  title: "Home Page",
  description: "home page"
}

export default function Home() {
  return (
    <>
      <Container >
        <Stack spacing={4} alignItems={"center"} justifyContent={"center"} sx={{height: "70vh"}}>
          <HomeCard route={"users"} />
          <HomeCard route={"posts"}/>
          <HomeCard route={"recipes"}/>
        </Stack>
      </Container>
    </>
  );
}
