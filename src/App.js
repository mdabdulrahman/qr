import {BrowserRouter,Routes,Route} from "react-router-dom";
import './index.css';
import Reader from "./components/Reader";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Reader/>}/>


    </Routes>
    </BrowserRouter>
  );
}

export default App;
