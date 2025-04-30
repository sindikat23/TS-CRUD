import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewsList from "./Components/News/NewsList";
import AddNews from "./Components/News/AddNews";
import EditNews from "./Components/News/EditNews";

function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<NewsList />} />
        <Route path="/add" element={<AddNews />} />
        <Route path="/edit/:id" element={<EditNews />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;