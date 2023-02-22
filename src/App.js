
import "./App.css";
import Home from "./views/Home.jsx";
import About from "./views/About.jsx";
import NewItem from "./views/NewItem.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/new" element={<NewItem />} />
      </Route>
    </Routes>
  );
}

export default App;
