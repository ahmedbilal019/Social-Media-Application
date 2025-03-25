import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Sidebar from "./components/Sidebar.jsx";
import CreatePost from "./components/CreatePost.jsx";
import PostList from "./components/PostList.jsx";
import { useState } from "react";
import PostListProvider from "./components/store/PostListStore.jsx";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></Sidebar>
        <div className="content">
          <Header></Header>
          {selectedTab === "Create Post" ? (
            <CreatePost></CreatePost>
          ) : (
            <PostList></PostList>
          )}

          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
