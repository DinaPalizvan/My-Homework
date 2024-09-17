import { Container } from "@mui/material";
import getData from "@/app/utils/fetchData";
import { Suspense } from "react";
import CircularWithValueLabel from "@/app/loading";
import AddRecipeForm from "@/components/AddRecipeForm";
import RecipeList from "@/components/RecipeList";

export const metadata = {
  title: "Recipes Page",
  description: "recipes page",
};

async function Recipes() {
  const data = await getData("http://localhost:3000/api/v1/recipes", {
    next: { tags: ["updatePost"] },
  });
  const recipes = data.recipes;

  return (
    <>
      <Suspense fallback={<CircularWithValueLabel />}>
        <Container sx={{ pb: 5 }}>
          <AddRecipeForm />
          <RecipeList data={recipes} />
        </Container>
      </Suspense>
    </>
  );
}

export default Recipes;
