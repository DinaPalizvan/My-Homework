"use client"
import { Typography } from "@mui/material"

function error({error}) {
  return (
    <Typography variant="h5">{error.message}</Typography>
  )
}

export default error