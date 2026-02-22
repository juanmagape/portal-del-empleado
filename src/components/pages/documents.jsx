import { useState, useEffect } from 'react'
import { Document, Page } from "react-pdf"
import "react-pdf/dist/Page/AnnotationLayer.css"
import "react-pdf/dist/Page/TextLayer.css"
import '../../App.css'
import { pdfjs } from "react-pdf"
import workerSrc from "pdfjs-dist/build/pdf.worker.min?url"

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc

function Documents() {
  const [documentos, setDocumentos] = useState([])
  const [selectedPdf, setSelectedPdf] = useState(null)
  const [numPages, setNumPages] = useState(null)
  const [isClosing, setIsClosing] = useState(false)

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
  }, [])

  const handleClosePdf = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedPdf(null);
      setIsClosing(false);
    }, 700);
  };

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
                    <button onClick={() => setSelectedPdf(doc.linkDoc)}>
                      Ver documento
                    </button>
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
                    <button onClick={() => setSelectedPdf(doc.linkDoc)}>
                      Ver documento
                    </button>
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
                    <button onClick={() => setSelectedPdf(doc.linkDoc)}>
                      Ver documento
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {selectedPdf && (
        <div className={`pdf-modal ${isClosing ? 'exiting' : ''}`}>
          <div className={`pdf-content ${isClosing ? 'exiting' : ''}`}>
            <button
              className="close-btn"
              onClick={handleClosePdf}
            >
              ✕
            </button>

            <Document
              file={selectedPdf}
              onLoadSuccess={({ numPages }) => setNumPages(numPages)}
            >
              {Array.from(new Array(numPages), (el, index) => (
                <Page
                  key={`page_${index + 1}`}
                  pageNumber={index + 1}
                  width={700}
                />
              ))}
            </Document>
          </div>
        </div>
      )}
    </>
  )
}

export default Documents;