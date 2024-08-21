import { Container, Stack, Typography } from "@mui/material";
import getData from "../utils/fetchData";
// import RecipeCard from "@/components/RecipeCard";
import { Suspense } from "react";
import Loading from "../loading";
import dynamic from "next/dynamic";

export const metadata = {
  title: "Recipes Page",
  description: "recipes page",
};

const RecipeCard = dynamic(() => import("@/components/RecipeCard"));

async function Recipes() {
  const data = await getData("https://dummyjson.com/recipes");
  const recipes = data.recipes;
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Container sx={{ pb: 5 }}>
          <Stack
            spacing={3}
            flexWrap={"wrap"}
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            {recipes.map((recipe) => {
              return (
                <RecipeCard
                  name={recipe.name}
                  ingredients={recipe.ingredients}
                  instructions={recipe.instructions}
                  cookTimeMinutes={recipe.cookTimeMinutes}
                  image={recipe.image}
                  id={recipe.id}
                  key={recipe.id}
                  item
                />
              );
            })}
          </Stack>
        </Container>
      </Suspense>
    </>
  );
}

export default Recipes;
