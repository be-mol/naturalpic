import "../assets/css/galeria.css"
import { useContext } from "react";
import MyContext from "./MyContext";
import Heart from "./Heart";

const Galeria = () => {
    const {fotos, setFotos} = useContext(MyContext)

    const like = (id) => {
        const index = fotos.findIndex((e) => e.id === id);
        fotos[index].liked = !fotos[index].liked;
        setFotos([...fotos]);
    };

    return (
        <div className="galeria grid-columns-5 p-3">
            {fotos.map((e) => {
                return (
                    <div key={e.id} className="foto" onClick={() => like(e.id)} style={{backgroundImage: `url(${e.src.tiny})`}}>
                        <Heart filled={(e.liked)} />                        
                        <p>{e.alt}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Galeria