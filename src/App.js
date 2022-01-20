import {NavBar} from "./components/NavBar";
import {Home} from "./pages/Home";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Profile} from "./pages/Profile";
import {About} from "./pages/About";
import {Alert} from "./components/Alert";
import {AlertState} from "./context/alert/alertState";

function App() {
  return (
      <AlertState>
          <BrowserRouter>
              <NavBar />
              <div className="container pt-4">
                  <Alert alert={{text: 'Test'}}/>
                  <Routes>
                      <Route path="/" exact element={<Home />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/profile/:name" element={<Profile />} />
                  </Routes>
              </div>
          </BrowserRouter>
      </AlertState>
  );
}

export default App;
