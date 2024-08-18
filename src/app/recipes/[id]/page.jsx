import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";

import getData from "@/app/utils/fetchData";

export default async function RecipeId({ params }) {
  const recipeId = params.id;
  const data = await getData(`https://dummyjson.com/recipes/${recipeId}`);
  return (
    <Stack alignItems={"center"}>
      <Card sx={{ width: 700, minHeight: 500, mb: 5 }}>
        <CardMedia
          component="img"
          height="250"
          image={data.image}
          alt="food photo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Cook Time Minutes: {data.cookTimeMinutes}
          </Typography>
          <hr />
          <Typography variant="body2" color="text.secondary">
            Ingredients: {data.ingredients}
          </Typography>
          <br />
          <Typography variant="body2" color="text.secondary">
            Instructions: {data.instructions}
          </Typography>
          <hr />
          <Typography variant="body2" color="text.secondary">
            Servings: {data.servings}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Difficulty: {data.difficulty}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Calories Per Serving: {data.caloriesPerServing}
          </Typography>
          <br />
          {data.tags.map((tag, i) => {
            return (
              <Typography variant="body2" color="text.secondary" key={i}>
                #{tag}
              </Typography>
            );
          })}
        </CardContent>
      </Card>
    </Stack>
  );
}
