import React from "react";
import { ListItem, Stack } from "@mui/joy";

const Navbar = () => {
  return (
    <div className="">
      <div className="flex justify-between m-auto align-middle items-center ">
        <p className="font-bold font-mono text-black">  News Feed</p>
        <div >
          <input
            type="search"
            placeholder="add any keyword"
            className="p-3 mr-5 border rounded-lg text-black font-bold"
          />
          <select className="m-2 p-2">
            <option value="english" >English</option>
            <option value="Hindi">Hindi</option>
          </select>
        </div>
      </div>
      <div className="m-4 p-2 ">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
          spacing={2}
          className="font-bold text-gray-700 cursor-pointer"
        >
          <div>Front Page</div>
          <div>India</div>
          <div>Market</div>
          <div>business</div>
          <div>World</div>
          <div>Tech</div>
          <div>Local</div>
          <div>Sports</div>
          <div>Opinion</div>
          <div>Lifestyle</div>
          <div>Bookmarked</div>
        </Stack>
      </div>
    </div>
  );
};

export default Navbar;
