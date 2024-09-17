"use client";
import { addPost } from "@/app/utils/actions";
import { Stack, TextField, Button, Typography, Container } from "@mui/material";
import { useState } from "react";

function AddPostForm() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [id, setId] = useState("");
  const [views, setViews] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    await addPost(title, body, id, views);
    setTitle("");
    setBody("");
    setId("");
    setViews("");
  }

  return (
    <>
      <Container>
        <form onSubmit={(e) => handleSubmit(e)}>
          <Stack sx={{ mx: 3 }} spacing={2} flexDirection={"column"}>
            <Typography>Add New Post:</Typography>
            <TextField
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              variant="standard"
              size="small"
              placeholder="title"
              fullWidth
            />
            <TextField
              value={body}
              onChange={(e) => setBody(e.target.value)}
              variant="standard"
              size="small"
              placeholder="body"
              fullWidth
            />
            <TextField
              value={id}
              onChange={(e) => setId(e.target.value)}
              variant="standard"
              size="small"
              placeholder="views"
              fullWidth
            />
            <TextField
              value={views}
              onChange={(e) => setViews(e.target.value)}
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

export default AddPostForm;
