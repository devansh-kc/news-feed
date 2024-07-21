import React, { useEffect, useState } from "react";
import BlogPostItems from "./BlogPostItems";
import { TablePagination } from "@mui/base";
import axios from "axios";

function BlogPostList() {
  const [newsData, setNewsData] = useState([]);
  const [newsDataWithoutImage, setNewsDataWithoutImage] = useState([]);
  async function fetchNewsFromApi() {
    const URL =
      "https://newsapi.org/v2/everything?q=india&apiKey=a08f2a51199e446db23bdbfd57b9f2e0";
    try {
      const result = await axios.get(URL);
      const storedData = result.data.articles;
      const filteredDataWithImage = storedData.filter(
        (data) => data.urlToImage !== null
      );
      setNewsData(filteredDataWithImage);
      const filteredDataWithOutImage = storedData.filter(
        (data) => data.urlToImage == null
      );
      setNewsDataWithoutImage(filteredDataWithOutImage);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  }
  useEffect(() => {
    fetchNewsFromApi();
  }, []);
  return (
    <div className="">
      <BlogPostItems newsData={newsData} />
    </div>
  );
}

export default BlogPostList;
