import "./App.css";
import Header from "./components/Header";
import Post from "./components/Post";

function App() {
  return (
    <div className="App">
      <Header />
      {/* Posts */}
      <div className="App__posts">
        <Post />
      </div>
    </div>
  );
}

export default App;
