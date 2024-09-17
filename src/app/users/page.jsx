import { Container, Stack, Typography } from "@mui/material";
import getData from "../utils/fetchData";
import Loading from "../loading";
import { Suspense } from "react";
import dynamic from "next/dynamic";
const UserCard = dynamic(() => import("@/components/UserCard"));

export const metadata = {
  title: "Users Page",
  description: "users page",
};

async function Users() {
  const data = await getData("http://localhost:3000/api/v1/users", {
    next: { tags: ["updateUser"] },
  });
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
                  name={
                    user.lastName
                      ? user.firstName + " " + user.lastName
                      : user.firstName
                  }
                  image={user.image ? user.image : null}
                  age={user.age ? user.age : null}
                  gender={user.gender ? user.gender : null}
                  id={user.id ? user.id : null}
                  role={user.role ? user.role : null}
                  key={user.id ? user.id : null}
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
