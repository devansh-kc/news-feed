import React, { useEffect, useState } from "react";
import BlogPostItems from "./BlogPostItems";
import axios from "axios";
import { Grid } from "@mui/joy";

function BlogPostList() {
  const [newsData, setNewsData] = useState([]);
  const [newsDataWithoutImage, setNewsDataWithoutImage] = useState([]);
  const [page, setPage] = useState(1);
  const num = [1, 2, 3];

  async function fetchNewsFromApi() {
    const URL = `https://newsapi.org/v2/everything?q=tech&apiKey=a08f2a51199e446db23bdbfd57b9f2e0`;
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

  function setPageHandler(selectedPage) {
    if (
      selectedPage >= 1 &&
      selectedPage <= newsData.length / 12 &&
      selectedPage !== page
    )
      setPage(selectedPage);
  }

  const paginationNumbers = [];
  for (let index = 1; index <= Math.ceil(newsData.length / 14); index++) {
    paginationNumbers.push(index);
  } 
  return (
    <div className="">
      <Grid
        columnGap={2}
        container
        sx={{ flexGrow: 1 }}
        justifyContent="center"
        alignItems="flex-start"
      >
        <BlogPostItems newsData={newsData} pageStartCount={page} />
      </Grid>

      <nav
        className=" flex items-center gap-x-1 justify-center p-4"
        aria-label="Pagination"
      >
        <button
          type="button"
          className={`min-h-[38px] min-w-[38px] py-2 px-2.5 bg-transparent inline-flex justify-center items-center gap-x-1.5 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10 ${
            page > 1 ? "" : "opacity-0 cursor-default"
          }`}
          aria-label="Previous"
          onClick={() => setPageHandler(page - 1)}
        >
          <svg
            className="shrink-0 size-3.5"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6"></path>
          </svg>
          <span>Previous</span>
        </button>
        <div className="flex items-center gap-x-1  text-white font-mono">
          {paginationNumbers.map((pageNumber, i) => {

            return (
              <button
                type="button"
                onClick={() => setPageHandler(i + 1)}
                className={`min-h-[38px] min-w-[38px] py-2 px-2.5 bg-transparent inline-flex justify-center items-center gap-x-1.5 text-sm rounded-lg text-gray-800  focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10 ${
                  page === i + 1
                    ? "hover:bg-gray-100 focus:outline-none opacity-50"
                    : ""
                }`}
                aria-current="page"
                key={i}
              >
                {pageNumber}
              </button>
            );
          })}
        </div>
        <button
          type="button"
          className={`min-h-[38px] min-w-[38px] py-2 px-2.5 bg-transparent inline-flex justify-center items-center gap-x-1.5 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10 ${
            page < newsData.length / 12 ? "" : "opacity-0  cursor-default"
          }`}
          aria-label="Next"
          onClick={() => setPageHandler(page + 1)}
        >
          <span>Next</span>
          <svg
            className="shrink-0 size-3.5"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </button>
      </nav>
    </div>
  );
}

export default BlogPostList;
