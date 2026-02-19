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
      <h1 className='title'>Documentos</h1>
      <div className="documentos-container">
        <h1>Nóminas</h1>

        <table>
          <thead>
            <tr>
              <th className="row">Título</th>
              <th className="row">Descripción</th>
              <th className="row">Enlace</th>
            </tr>
          </thead>

          <tbody>
            {documentos
              .filter(doc => doc.tipoDoc === 'nominas')
              .map((doc, index) => (
                <tr key={index}>
                  <td>{doc.tituloDoc}</td>
                  <td>{doc.descDoc}</td>
                  <td>
                    <a href={doc.linkDoc} target="_blank" rel="noopener noreferrer">
                      Ver documento
                    </a>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <div className="documentos-container">
        <h1>Contratos</h1>

        <table>
          <thead>
            <tr>
              <th className="row">Título</th>
              <th className="row">Descripción</th>
              <th className="row">Enlace</th>
            </tr>
          </thead>

          <tbody>
            {documentos
              .filter(doc => doc.tipoDoc === 'contratos')
              .map((doc, index) => (
                <tr key={index}>
                  <td>{doc.tituloDoc}</td>
                  <td>{doc.descDoc}</td>
                  <td>
                    <a href={doc.linkDoc} target="_blank" rel="noopener noreferrer">
                      Ver documento
                    </a>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <div className="documentos-container">
      <h1>Documentos</h1>
        <table>
          <thead>
            <tr>
              <th className="row">Título</th>
              <th className="row">Descripción</th>
              <th className="row">Enlace</th>
            </tr>
          </thead>

          <tbody>
            {documentos
              .filter(doc => doc.tipoDoc === 'docs')
              .map((doc, index) => (
                <tr key={index}>
                  <td>{doc.tituloDoc}</td>
                  <td>{doc.descDoc}</td>
                  <td>
                    <a href={doc.linkDoc} target="_blank" rel="noopener noreferrer">
                      Ver documento
                    </a>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Documents;
