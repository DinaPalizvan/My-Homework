import { Container, Stack, Typography } from "@mui/material";
import getData from "../utils/fetchData";
import UserCard from "@/components/UserCard";
import Loading from "../loading";
import { Suspense } from "react";

async function Users() {
  const data = await getData("https://dummyjson.com/users");
  const users = data.users;

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Container sx={{ pb: 5 }}>
          <Stack
            spacing={3}
            flexWrap={"wrap"}
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            {users.map((user) => {
              return (
                <UserCard
                  name={user.firstName + " " + user.lastName}
                  image={user.image}
                  age={user.age}
                  gender={user.gender}
                  id={user.id}
                  role={user.role}
                  key={user.id}
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

export default Users;
