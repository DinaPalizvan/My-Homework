"use client";
import { addUser } from "@/app/utils/actions";
import { Stack, TextField, Button, Typography, Container } from "@mui/material";
import { useState } from "react";

function AddUserForm() {
  const [firstName, setFirstName] = useState("");
  const [age, setAge] = useState("");
  const [id, setId] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    await addUser(firstName, age, id);
    setFirstName("");
    setAge("");
    setId("");
  }

  return (
    <>
      <Container>
        <form onSubmit={(e) => handleSubmit(e)}>
          <Stack sx={{ mx: 3 }} spacing={2} flexDirection={"column"}>
            <Typography>Add New User:</Typography>
            <TextField
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              variant="standard"
              size="small"
              placeholder="first name"
              fullWidth
            />
            <TextField
              value={age}
              onChange={(e) => setAge(e.target.value)}
              variant="standard"
              size="small"
              placeholder="age"
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

export default AddUserForm;
