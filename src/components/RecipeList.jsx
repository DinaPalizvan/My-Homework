"use client";
import { deleteRecipe, editRecipe } from "@/app/utils/actions";
import {
  Button,
  List,
  ListItem,
  ListItemText,
  Stack,
  TextField,
} from "@mui/material";

function RecipeList({ data }) {
  function handleEdit(e, id) {
    editRecipe(id, e.target.value);
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
                defaultValue={el.name}
                variant="standard"
                fullWidth
                error
              />
            </ListItemText>

            <Button
              onClick={() => deleteRecipe(el.id)}
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

export default RecipeList;
