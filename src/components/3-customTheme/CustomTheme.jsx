import { Box, Container, Rating, Typography } from "@mui/material";
import { useState } from "react";

export default function CustomTheme() {
  const [value, setValue] = useState(2);

  return (
    <Container maxWidth="md">
      <Box
        display="flex"
        flexDirection={"column"}
        alignItems="center"
        sx={{
          "& > legend": { mt: 2 },
          bgcolor:"success.main",
          p:3,
          m:3,
          borderRadius:2
        }}
      >
        <Typography variant="h4" component="legend" sx={{color:"secondary.main", borderRadius:2, py:1, px:3, bgcolor:"secondary.light"}}>Rate:</Typography>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          precision={0.5}
          size="large"
          max={5}
          sx={{color:"primary.main"}}
        />
      </Box>
    </Container>
  );
}
