import { Typography } from "@mui/material";
import { notFound } from "next/navigation";

function page({ params }) {
  const id = Number(params.id);
  if (!id) {
    notFound();
  }
  return (
    <Typography variant="h5" align="center">
      admin id: {params.id}
    </Typography>
  );
}

export default page;
