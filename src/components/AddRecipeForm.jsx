"use client";
import { addRecipe } from "@/app/utils/actions";
import { Stack, TextField, Button, Typography, Container } from "@mui/material";
import { useState } from "react";

function AddRecipeForm() {
  const [instructions, setInstructions] = useState("");
  const [name, setName] = useState("");
  const [id, setId] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    await addRecipe(id, name, instructions);
    setInstructions("");
    setName("");
    setId("");
  }

  return (
    <>
      <Container>
        <form onSubmit={(e) => handleSubmit(e)}>
          <Stack sx={{ mx: 3 }} spacing={2} flexDirection={"column"}>
            <Typography>Add New Recipe:</Typography>
            <TextField
              value={name}
              onChange={(e) => setName(e.target.value)}
              variant="standard"
              size="small"
              placeholder="name"
              fullWidth
            />
            <TextField
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              variant="standard"
              size="small"
              placeholder="instructions"
              fullWidth
            />
            <TextField
              value={id}
              onChange={(e) => setId(e.target.value)}
              variant="standard"
              size="small"
              placeholder="id"
              fullWidth
            />
            <Button color="secondary" type="submit">
              Submit
            </Button>
          </Stack>
        </form>
      </Container>
    </>
  );
}

export default AddRecipeForm;
