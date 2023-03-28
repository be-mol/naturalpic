import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import MyContext from "./components/MyContext";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Favoritos from "./views/Favoritos"

const App = () => {

  const endpoint = "/fotos.json";
  const [fotos, setFotos] = useState([])
  const sharedStates = { fotos, setFotos }

  //Llamar a la función que consume la Api
    useEffect (() => {
      getFotos();
    }, [])
  //Funcion que consulta la Api
    const getFotos = async () => {
      const resFotos = await fetch(endpoint);
      const dataFotos = await resFotos.json()
      setFotos(dataFotos.photos)
      }

  return (
    <div className="App">
      <MyContext.Provider value={ sharedStates }>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="favoritos" element={<Favoritos />} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </div>
  );
}

export default App;