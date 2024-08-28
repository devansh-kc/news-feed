import React, { useEffect } from "react";
import {
  AspectRatio,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/joy";

function BlogPostItems({ newsData, pageStartCount }) {
  return (
    <>
      {newsData.map((article, index) => (
        <div
          key={index}
          className="font-mono text-white m4 p-4  flex  justify-center items-center align-top  "
        >
          <div className=" p-4  m-4  ">
            <img
              src={article.urlToImage}
              alt={article.title}
              className="   object-cover"
            />
          </div>
          <div className="break-all p-4 border border-white">
            <h5> {article.title}</h5>
            <p> {article.author ? article.author : ""}</p>
            <p>
              {" "}
              {article.description && article.description.length > 100
                ? `${article.description.substring(0, 300)}...`
                : article.description || "No description available"}
            </p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Read More
            </a>
          </div>
        </div>
        // <Grid key={index}>
        //   <Card
        //     sx={{
        //       width: "370px",
        //       maxWidth: "100%",
        //     }}
        //     color="neutral"
        //     variant="outlined"
        //     orientation="horizontal"

        //     // invertedColors
        //   >
        //     <CardContent>
        //       <AspectRatio sx={{ objectFit: "cover" }}>
        //         <img src={article.urlToImage} alt={article.title} />
        //       </AspectRatio>
        //       <Typography variant="h5" component="div">
        //         {article.title}
        //       </Typography>
        //       <Typography variant="subtitle1" color="text.secondary">
        //         {article.author ? article.author : "Unknown Author"}
        //       </Typography>
        //       <Typography variant="body2" color="text.primary">
        //         {article.description && article.description.length > 100
        //           ? `${article.description.substring(0, 100)}...`
        //           : article.description || "No description available"}
        //       </Typography>
        //       <Typography variant="body2" color="text.secondary">
        //         <a
        //           href={article.url}
        //           target="_blank"
        //           rel="noopener noreferrer"
        //         >
        //           Read More
        //         </a>
        //       </Typography>
        //     </CardContent>
        //   </Card>
        // </Grid>
      ))}
    </>
  );
}

export default BlogPostItems;
