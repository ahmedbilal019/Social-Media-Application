import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Sidebar from "./components/Sidebar.jsx";

function App() {
  return (
    <div className="app-container">
      <Sidebar></Sidebar>
      <div className="content">
        <Header></Header>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
