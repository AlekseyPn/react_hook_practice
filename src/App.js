import {NavBar} from "./components/NavBar";
import {Home} from "./pages/Home";

function App() {
  return (
      <>
        <NavBar />
        <div className="container pt-4">
          <Home />
        </div>
      </>
  );
}

export default App;
