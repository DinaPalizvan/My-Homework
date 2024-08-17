import { Typography } from "@mui/material";
import { notFound } from "next/navigation";

function ProductId({ params }) {
  const id = Number(params.id);
  if (!id) {
    notFound();
  }
  return (
    <Typography variant="h5" align="center">
      ProductId: {params.id}
    </Typography>
  );
}

export default ProductId;
