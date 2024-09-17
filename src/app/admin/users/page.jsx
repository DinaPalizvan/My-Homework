import { Container } from "@mui/material";
import getData from "@/app/utils/fetchData";
import { Suspense } from "react";
import CircularWithValueLabel from "@/app/loading";
import AddUserForm from "@/components/AddUserForm";
import UserList from "@/components/UserList";

export const metadata = {
  title: "Users Page",
  description: "users page",
};

async function Users() {
  const data = await getData("http://localhost:3000/api/v1/users", {
    next: { tags: ["updatePost"] },
  });
  const users = data.users;

  return (
    <>
      <Suspense fallback={<CircularWithValueLabel />}>
        <Container sx={{ pb: 5 }}>
          <AddUserForm />
          <UserList data={users} />
        </Container>
      </Suspense>
    </>
  );
}

export default Users;
