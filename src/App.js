import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";
import Post from "./components/Post";
import { auth, getPosts } from "./Firebase";

function App() {
  const [posts, setPosts] = useState([]);
  const [isAuthenticated, setAuthentication] = useState(false);

  useEffect(() => {
    const listener = auth.onAuthStateChanged((user) => {
      if (user) {
        setAuthentication(true);
      } else {
        setAuthentication(false);
      }
    });

    getPosts((posts) => {
      setPosts(posts);
    });

    return () => {
      listener();
    };
  }, []);

  return (
    <div className="App">
      <Header />
      {/* Posts */}
      {isAuthenticated ? (
        <div className="App__posts">
          {posts.map((post) => (
            <Post post={post} key={post.id} />
          ))}
        </div>
      ) : (
        <div className="App__login">
          <Login main />
        </div>
      )}
    </div>
  );
}

export default App;
