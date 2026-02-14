import { useState, useEffect } from 'react'

function Documents() {
  const [documentos, setDocumentos ] = useState([])

  useEffect(() => {
    async function fetchDocuments() {
    try {
      const res = await fetch('/documentos.json');
      const data = await res.json();
      setDocumentos(data);
    } catch (error) {
        console.error('Error fetching documents:', error) 
      }
    }
    fetchDocuments();
    },[])


  return (
    <>
      <h1>Documentos</h1>

      <div>
        {documentos.map((doc, index) => (
          <div key={index}> 
          <h2>{doc.tituloDoc}</h2> 
          <p>{doc.tipoDoc}</p> 
          <a href={doc.linkDoc} target="_blank" rel="noopener noreferrer">Ver documento</a> 
          </div>))}
      </div>

      <div>
        Nóminas
      </div>

      <div>
        Otros
      </div>
    </>
  )
}

export default Documents;
