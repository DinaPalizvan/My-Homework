"use client";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useRouter } from "next/navigation";

export default function UserCard({ name, image, id, gender, role, age }) {
  const router = useRouter();
  return (
    <Card sx={{ width: 300 }} onClick={() => router.push(`/users/${id}`)}>
      <CardActionArea>
        {image && (
          <CardMedia
            component="img"
            height="140"
            image={image}
            alt="user profile"
          />
        )}

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Id: {id}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Gender: {gender}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Age: {age}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Role: {role}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
