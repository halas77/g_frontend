import "./App.css";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <Home />
      </div>
    </>
  );
}

export default App;
