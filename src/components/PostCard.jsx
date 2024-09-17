"use client";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useRouter } from "next/navigation";

export default function PostCard({ title, body, id, tags, views }) {
  const router = useRouter();

  return (
    <>
      <Card sx={{ width: 700 }} onClick={() => router.push(`/posts/${id}`)}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {body}
            </Typography>
            <br />
            {tags?.map((tag, i) => {
              return (
                <Typography variant="body2" color="text.secondary" key={i}>
                  #{tag}
                </Typography>
              );
            })}
            <hr />
            <Typography variant="body2" color="text.secondary">
              Views: {Number(views)}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
