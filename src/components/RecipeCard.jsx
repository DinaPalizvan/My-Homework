"use client";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function RecipeCard({
  name,
  image,
  id,
  ingredients,
  instructions,
  cookTimeMinutes,
}) {
  const router = useRouter();
  return (
    <Card
      sx={{ width: 500, height: 430, overflow: "auto" }}
      onClick={() => router.push(`/recipes/${id}`)}
    >
      <CardActionArea>
        <Image src={image} width={500} height={140} style={{objectFit:"cover"}} alt="food pic"/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Cook Time Minutes: {cookTimeMinutes}
          </Typography>
          <hr />
          <Typography variant="body2" color="text.secondary">
            Ingredients: {ingredients}
          </Typography>
          <br />
          <Typography variant="body2" color="text.secondary">
            Instructions: {instructions}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
