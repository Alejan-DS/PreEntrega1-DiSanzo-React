import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";

function App() {

  return (
    <div className='container-app'>

      <BrowserRouter>

        <Navbar />

        <Routes>

          <Route path="/" element={<ItemListContainer  />}></Route>
          <Route path="/category/:idCategory" element={<ItemListContainer  />}></Route>
          <Route path="/items/:idItem" element={<ItemDetailContainer />}></Route>
        
        </Routes>

        <Footer /> 

      </BrowserRouter>

    </div>
  );
}

export default App;
