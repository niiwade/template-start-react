
import './App.css';
import Navbar from './components/NavBar';
// import Blog from "./components/Blog";
import FeaturedPost from './components/FeaturedPost';
import ListOfPost from './components/ListOfPost';
import getAllPosts from "./resources/posts"

function App() {
  return (
    <div className="App">
      <Navbar />

      <ListOfPost posts={getAllPosts()} />

      <FeaturedPost title={""} height={500} width={500} content={""} image={""} />

    </div>
  );
}

export default App;
