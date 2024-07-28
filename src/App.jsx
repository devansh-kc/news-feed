import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import BlogPostList from "./component/BlogPostList";
import Navbar from "./component/Navbar";

function App() {
  return(
    <div className="">

    <Navbar/>
    <BlogPostList/>
    </div>
  )
}

export default App;
