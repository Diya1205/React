import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Create from "./component/Create";
import Read from "./component/Read";
import Update from "./component/Update";

function App() {
  return (
    <div className="App">
      <>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Create />} />
            <Route path="/read" element={<Read />} />
            {/* update */}
            <Route path="/edit/:id" element={<Update />} />
          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
