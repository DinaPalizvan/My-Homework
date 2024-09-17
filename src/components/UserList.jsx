"use client";
import { deleteUser, editUser } from "@/app/utils/actions";
import {
  Button,
  List,
  ListItem,
  ListItemText,
  Stack,
  TextField,
} from "@mui/material";

function UserList({ data }) {
  function handleEdit(e, id) {
    editUser(id, e.target.value);
  }

  return (
    <List sx={{ my: "2rem" }}>
      <Stack
        spacing={3}
        flexWrap={"wrap"}
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        {data.map((el) => (
          <ListItem key={el.id}>
            <ListItemText sx={{ mx: 5 }}>
              <TextField
                onChange={(e) => handleEdit(e, el.id)}
                defaultValue={el.firstName}
                variant="standard"
                fullWidth
                error
              />
            </ListItemText>

            <Button
              onClick={() => deleteUser(el.id)}
              variant="secondary"
              sx={{ background: "#ff1744" }}
            >
              Delete
            </Button>
          </ListItem>
        ))}
      </Stack>
    </List>
  );
}

export default UserList;
