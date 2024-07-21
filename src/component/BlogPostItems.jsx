import React, { useEffect } from "react";
import {
  AspectRatio,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/joy";
import { Stack } from "@mui/joy";

function BlogPostItems({ newsData }) {
  return (
    <Grid container spacing={6} sx={{ flexGrow: 1 }} >
      {newsData.map((article, index) => (
        <Grid key={index} md={4}>
          <Card
            sx={{
              width: "420px",
              maxWidth: "100%",
            }}
            color="neutral"
            variant="outlined"
            orientation="horizontal"
            invertedColors
          >
            <CardContent>
              <AspectRatio sx={{ minWidth: "300px" }}>
                <img src={article.urlToImage} alt={article.title} />
              </AspectRatio>
              <Typography variant="h5" component="div" dir="rtl">
                {article.title}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                {article.author ? article.author : "Unknown Author"}
              </Typography>
              <Typography variant="body2" color="text.primary">
                {article.description && article.description.length > 100
                  ? `${article.description.substring(0, 100)}...`
                  : article.description || "No description available"}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  Read More
                </a>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default BlogPostItems;
