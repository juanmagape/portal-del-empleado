import { useState, useEffect } from 'react'
import '../../App.css'

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

      <div className="documentos-container">
      <h1>Documentos</h1>
        {documentos
        .filter(doc => doc.tipoDoc === 'docs')
        .map((doc, index) => (
          <div key={index}> 
          <h2>{doc.tituloDoc}</h2> 
          <a href={doc.linkDoc} target="_blank">Ver documento</a> 
          </div>))}
      </div>

      <div className="documentos-container">
        <h1>Contratos</h1>

        {documentos
        .filter(doc => doc.tipoDoc === 'contratos')
        .map((doc, index) => (
          <div key={index}> 
          <h2>{doc.tituloDoc}</h2> 
          <a href={doc.linkDoc} target="_blank">Ver documento</a> 
          </div>))}
      </div>

      <div className="documentos-container">
        <h1>Nóminas</h1>

        {documentos
        .filter(doc => doc.tipoDoc === 'nominas')
        .map((doc, index) => (
          <div key={index}> 
          <h2>{doc.tituloDoc}</h2> 
          <a href={doc.linkDoc} target="_blank">Ver documento</a> 
          </div>))}
      </div>
    </>
  )
}

export default Documents;
