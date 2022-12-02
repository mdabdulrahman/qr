import {BrowserRouter,Routes,Route} from "react-router-dom";
import './index.css';
import Reader from "./components/Reader";
import Create from "./components/Create";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Reader/>}/>
<Route exact path="/create" element={<Create/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
