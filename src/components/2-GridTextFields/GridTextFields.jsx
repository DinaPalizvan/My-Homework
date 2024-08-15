import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

export default function GridTextFields() {
  return (
    <>
      <Container maxWidth="md" sx={{ mt: 5 }}>
        <Typography variant="h4" align="center" mb={5} sx={{fontSize: {xs: 20, md: 35}}}>
          Create Your Account
        </Typography>
        <Box component={"form"}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <TextField label="Full Name" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField label="User Name" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField label="Age" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Email"
                variant="outlined"
                type="email"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Password"
                variant="outlined"
                type="password"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                label="Bio"
                variant="outlined"
                multiline
                rows={3}
                fullWidth
              />
            </Grid>
            <Button
              variant="contained"
              color="secondary"
              type="submit"
              sx={{ width: 400, margin: "20px auto" }}
            >
              sign up
            </Button>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
