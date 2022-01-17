import {NavBar} from "./components/NavBar";
import {Home} from "./pages/Home";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Profile} from "./pages/Profile";
import {About} from "./pages/About";

function App() {
  return (
      <BrowserRouter>
        <NavBar />
        <div className="container pt-4">
          <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/profile/:name" element={<Profile />} />
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
