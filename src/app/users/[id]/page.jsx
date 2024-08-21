import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import getData from "@/app/utils/fetchData";

export async function generateMetadata({params}){
  return {
    title: `User id ${params.id}`
  }
}

export default async function UserPage({ params }) {
  const userId = params.id;
  const data = await getData(`https://dummyjson.com/users/${userId}`);
  return (
    <Stack alignItems={"center"}>
      <Card sx={{ width: 500, height: 500 }}>
        <CardMedia
          component="img"
          height="250"
          image={data.image}
          alt="user profile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.name}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Id: {data.id}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Username: {data.username}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Gender: {data.gender}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Age: {data.age}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            BirthDate: {data.birthDate}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Role: {data.role}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Address: {data.address.address + data.address.city}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            University: {data.university}
          </Typography>
        </CardContent>
      </Card>
    </Stack>
  );
}
