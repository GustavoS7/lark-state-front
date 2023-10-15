import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import Navbar from "./template/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
