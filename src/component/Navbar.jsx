import React from "react";
import { ListItem, Stack } from "@mui/joy";

const Navbar = () => {
  const data = [
    "Front Page",
    "India",
    "Market",
    "business World",
    "Tech",
    "Local ",
    "Sports",
    "Opinion",
    "Lifestyle",
    "Bookmarked",
  ];
  return (
    <div className=" justify-between   items-center align-middle  bg-[#2a2d32] text-white  ">
      <div className="flex justify-between  align-middle items-center  ">
        <p className="font-bold font-mono p-4"> News Feed</p>
        <div className="flex ">
          <input
            type="search"
            placeholder="add any keyword"
            className="  p-3 m-3 border rounded-lg text-black font-bold"
          />
          <select className="  p-3 m-3 rounded-md text-black">
            <option value="english">English</option>
            <option value="Hindi">Hindi</option>
          </select>
        </div>
      </div>
      <div className=" max-lg:hidden bg-">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
          spacing={2}
          className="font-bold  cursor-pointer  m-2 p-2"
        >
          {data.map((headings,index) => {
            return <p key={index} >{headings}</p>
          })}
        </Stack>
      </div>
    </div>
  );
};

export default Navbar;
