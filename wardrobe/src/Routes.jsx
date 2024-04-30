import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Shoes from "./shoes/Shoes";
import Create from "./crud/Create";
import Update from "./crud/Update";
import Read from "./crud/Read";

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/create" element={<Create />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="/read/:id" element={<Read />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing; //Kommentars
