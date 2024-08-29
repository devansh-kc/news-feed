import React from "react";

function BlogPostItems({ newsData, pageStartCount }) {
  return (
    <>
      {newsData
        .slice(pageStartCount * 12 - 12, pageStartCount * 12)
        .map((article, index) => (
          <div
            key={index}
            className=" p-[2%]  m-[2%] w-[450px] flex-col  justify-center items-center  text-white font-mono "
          >
            <img
              src={article.urlToImage}
              alt={article.title}
              className=" object-cover"
            />
            <div className="m-[1%] ">
              <h5 className="text-2xl font-bold "> {article.title}</h5>
              <p> {article.author ? article.author : ""}</p>
              <p className="">
                {" "}
                {article.description && article.description.length > 100
                  ? `${article.description.substring(0, 90)}...`
                  : article.description || "No description available"}
              </p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                Read More
              </a>
            </div>
          </div>
        ))}
    </>
  );
}

export default BlogPostItems;
