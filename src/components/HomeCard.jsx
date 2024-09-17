"use client";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, colors } from "@mui/material";
import { useRouter } from "next/navigation";

export default function HomeCard({ route }) {
  const router = useRouter();
  return (
    <Card
      sx={{ width: 250, bgcolor: colors.cyan[200] }}
      onClick={() => router.push(`/${route}`)}
    >
      <CardActionArea href="">
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" align="center">
            {route}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
