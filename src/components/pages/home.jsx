import { NavLink, useState, useEffect } from 'react'
import '../styles/home.css'

function Home() {
  const [anuncios, setAnuncios] = useState([]);

  useEffect(() => {
  async function fetchData() {
  try {
    const res = await fetch('/anuncios.json');
    const data = await res.json();
    setAnuncios(data);

  } catch (err) {
    console.error('Error fetching data');
  }

  }
  fetchData()
  }, []);

  return (
    <div>
      <h1>Tablón de anuncios</h1>
      <div className="container-anuncios">
        {anuncios.map((anuncio, index) => (
          <div key={index} className=" anuncios">
            <h2 className="text-xl font-bold">{anuncio.titulo}</h2>

            <p className="text-gray-700">{anuncio.descripcion}</p>
            <p className="text-sm text-gray-400 fecha-texto">{anuncio.fecha}</p>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Home;
