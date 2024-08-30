import "./App.css";
import BlogPostDetails from "./component/BlogPostDetails";
import BlogPostList from "./component/BlogPostList";
import Navbar from "./component/Navbar";

function App() {
  return(
    <div className="bg-black">

    <Navbar/>
    <BlogPostList/>
    
    </div>
  )
}

export default App;
