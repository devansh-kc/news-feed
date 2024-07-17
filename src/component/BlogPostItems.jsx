import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { AspectRatio, Card, CardContent, Typography } from "@mui/joy";

function BlogPostItems() {
  const [newsData, setNewsData] = useState([]);
  async function fetchNewsFromApi() {
    const URL =
      "https://newsapi.org/v2/everything?q=movie&apiKey=a08f2a51199e446db23bdbfd57b9f2e0";
    try {
      const result = await axios.get(URL);
      const data = result.data.articles;
      setNewsData(data);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  }
  useEffect(() => {
    fetchNewsFromApi();
  }, []);
  return (
    <>
      {newsData.map((article, index) => (
        <div className="m-4">
          <Card
            key={index}
            sx={{
              width: "500px",
              maxWidth: "100%",
              boxShadow: "lg",
              margin: "15px",
              padding:"10px",
              backgroundColor:"#18191a"
            }}
          >
            <CardContent>
              <AspectRatio
                sx={{ minWidth: "400", margin: "15px", padding: "15px" }}
              >
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  className="h-[240px] w-full object-cover"
                />
              </AspectRatio>
              <Typography variant="h5" component="div">
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
        </div>
      ))}
    </>
  );
}

export default BlogPostItems;
