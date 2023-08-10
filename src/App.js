
import "./App.css";
import { ItemListContainer } from "./components/ItemListContainer";
import { NavBar } from "./components/NavBar"; 

function App() {
  return (
    <>
      <NavBar />
      <div className='msj'>
      <ItemListContainer greeting="Bienvenido a Noir !" />
      </div>
    </>
  );
}

export default App;
