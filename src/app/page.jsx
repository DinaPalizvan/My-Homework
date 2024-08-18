import HomeCard from "@/components/HomeCard";
import { Container, Stack, Typography } from "@mui/material";

export default function Home() {
  return (
    <>
      <Container >
        <Stack spacing={4} alignItems={"center"} justifyContent={"center"} sx={{height: "70vh"}}>
          {/* <Typography variant="h5" align="center">Home:</Typography> */}
          <HomeCard route={"users"} />
          <HomeCard route={"posts"}/>
          <HomeCard route={"recipes"}/>
        </Stack>
      </Container>
    </>
  );
}
