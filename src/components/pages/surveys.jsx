import { useRef } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import '../styles/surveys.css'

function Surveys() {
  const modalRef = useRef(null);
  const overlayRef = useRef(null);

  const handleClose = (close) => {
    const popupContent = modalRef.current?.closest('.popup-content');
    const popupOverlay = modalRef.current?.closest('.popup-overlay');

    if (popupContent) popupContent.classList.add('exiting');
    if (popupOverlay) popupOverlay.classList.add('exiting');

    setTimeout(() => {
      close();
    }, 700);
  };

  return (
    <>
      <h1>Encuestas</h1>
      <Popup
        trigger={<button className="button"> Open Modal </button>}
        modal
        nested
        contentStyle={{
          borderRadius: "20px",
          padding: "20px"
        }}
      >
        {close => (
          <>
            <div
              ref={overlayRef}
              className="overlay-anim"
            />
            <div ref={modalRef} className="modal">
              <h1>Encuesta</h1>

              <h3>Pregunta 1</h3>
              <div className='quest'>
                <label>
                  <input type="checkbox" id="cbox1" value="first_checkbox" />
                  <p>A</p>
                </label>
                <label>
                  <input type="checkbox" id="cbox2" value="first_checkbox" />
                  <p>B</p>
                </label>
                <label>
                  <input type="checkbox" id="cbox3" value="first_checkbox" />
                  <p>C</p>
                </label>
              </div>

              <label>
                <input type="textarea" id="text" placeholder='Ejemplo 1' />
              </label>

              <div className="actions">
                <button
                  className="button"
                  onClick={() => {
                    console.log('modal closed');
                    handleClose(close);
                  }}
                >
                  Cerrar encuesta
                </button>
              </div>
            </div>
          </>
        )}
      </Popup>
    </>
  );
}

export default Surveys;