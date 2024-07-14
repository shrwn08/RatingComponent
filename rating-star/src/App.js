import "./App.css";
import Rating from "./Components/Rating";

function App() {
  return <div className="w-full h-screen bg-zinc-700 flex justify-center items-center">
    <Rating starNum = {5}/>
  </div>;
}

export default App;
