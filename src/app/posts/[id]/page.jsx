import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, Stack } from "@mui/material";
import getData from "@/app/utils/fetchData";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";

export async function generateMetadata({ params }) {
  return {
    title: `Post id ${params.id}`,
  };
}

export default async function PostId({ params }) {
  const postId = params.id;
  const data = await getData(`http://localhost:3000/api/v1/posts/${postId}`);
  return (
    <Stack alignItems={"center"}>
      <Card sx={{ width: 700 }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data?.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {data?.body}
            </Typography>
            <br />
            {data?.tags?.map((tag, i) => {
              return (
                <Typography variant="body2" color="text.secondary" key={i}>
                  #{tag}
                </Typography>
              );
            })}
            <hr />
            <Typography variant="body2" color="text.secondary">
              views: {data?.views}
            </Typography>
            <br />
            <Typography>
              <ThumbUpAltIcon />
              {data?.reactions?.likes}
            </Typography>
            <Typography>
              <ThumbDownAltIcon />
              {data?.reactions?.dislikes}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Stack>
  );
}
