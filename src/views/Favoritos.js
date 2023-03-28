import { useContext } from "react";
import MyContext from "../components/MyContext";
import Heart from "../components/Heart"

const Favoritos = () => {
    const {fotos, setFotos} = useContext(MyContext);
  
    const unlike = (id) => {
      const index = fotos.findIndex((f) => f.id === id);
      fotos[index].liked = !fotos[index].liked
      setFotos([...fotos]);
      }


    return (
      <div>
        <h1>Fotos favoritas</h1>
        <div className="p-3 galeria grid-columns-4">
        {fotos.filter((e)=>e.liked).map((e)=>(
              <div className="foto" onClick={()=>unlike(e.id)} style={{backgroundImage: `url(${e.src.tiny})`}} key={e.id}>
                <Heart filled={e.liked} />
                <p>{e.alt}</p>
              </div>
            ))}
        </div>
      </div>
    )
  }
  

export default Favoritos