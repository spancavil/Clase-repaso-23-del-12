//import logo from './logo.svg';
//import './App.css';
import './App.css';

import { Header } from "./Components/Header";
import { ItemListContainer } from "./Components/ItemListContainer";
import { Lista } from "./Components/Lista/";
import { ProductProvider } from "./Context/ProductProvider";

function App() {

  const variableX = 2

  const paises = [{ 
    pais: "Argentina",
    capital: "Bs As"
  },{
    pais: "Chile",
    capital: "Santiago",
  },{
    pais: "Bolivia",
    capital: "La Paz"
  }, {
    pais: "Costa Rica",
    capital: "San Jose"
  }
  ];

  return (
    <ProductProvider>
        <Header/>
        <Lista paisesRecibidos = {paises} valorAleatorio = {variableX}/>
        <ItemListContainer/>
    </ProductProvider>
  );
}

export default App;
