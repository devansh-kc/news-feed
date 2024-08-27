import React from "react";
import { useState } from "react";

const Pagination = (items, pages=10) => {

 
  
  return (
    <span className="text-center   justify-center items-center flex   p-5 ">
      <span
        className=" border-white m-2 p-3 border bg-white "
      >
        👈
      </span>
      <span className=" p-3"   ></span>
      <span
        className=" border-white m-2 p-3  border bg-white "
        // onClick={nextPage}
      >
        👉
      </span>
    </span>
  );
};

export default Pagination;
