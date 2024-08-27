import React, { useEffect, useState } from "react";
import BlogPostItems from "./BlogPostItems";
import axios from "axios";
import { Grid } from "@mui/joy";
import Pagination from "./Pagination";

function BlogPostList() {
  const [newsData, setNewsData] = useState([]);
  const [newsDataWithoutImage, setNewsDataWithoutImage] = useState([]);
  const [page, setPage] = useState(1);

  async function fetchNewsFromApi() {
    const URL = `https://newsapi.org/v2/everything?q=india&apiKey=a08f2a51199e446db23bdbfd57b9f2e0&pageSize=41`;
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

  function selectPageHandler(event) {
    setPage(event);
  }
  return (
    <div className="">
      <Grid
        container
        spacing={5}
        sx={{ flexGrow: 1 }}
        justifyContent="center"
        alignItems="flex-start"
      >
        <BlogPostItems newsData={newsData} pageStartCount={page} />
      </Grid>
      <div className="flex items-center  justify-center p-6  ">
        <span
          className="mx-1  text-sm font-semibold text-gray-900"
          onClick={(i) => selectPageHandler(page - 1)}
        >
          👈
        </span>
        {[...Array(newsData?.length / page)].map((_, i) => (
          <span
            onClick={() => selectPageHandler(i - 1)}
            className="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-white hover:scale-105"
            key={i}
          >
            {i + 1}
          </span>
        ))}
        <span
          className="mx-2 text-sm font-semibold text-gray-900"
          onClick={() => selectPageHandler(page + 1)}
        >
          👉
        </span>
      </div>
    </div>
  );
}

export default BlogPostList;
