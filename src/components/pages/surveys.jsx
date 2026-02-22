import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import '../styles/surveys.css'

function Surveys() {

  return (
    <>
      <h1>Encuestas</h1>
  <Popup
    trigger={<button className="button"> Open Modal </button>}
    modal
    nested
  >
    {close => (
      <div className="modal">
        <h1>Encuesta</h1>
        
        <h3>Pregunta 1</h3>
        <label>
          <input type="checkbox" id="cbox1" value="first_checkbox" /> 
          Este es mi primer checkbox
          <input type="checkbox" id="cbox1" value="first_checkbox" /> 
          Este es mi primer checkbox
          <input type="checkbox" id="cbox1" value="first_checkbox" /> 
          Este es mi primer checkbox
          <input type="textarea" id="cbox1" placeholder='Ejemplo 1' /> 
          
        </label>

        <div className="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
          Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
          delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit
          commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae
          explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?
        </div>
        <div className="actions">

          <button
            className="button"
            onClick={() => {
              console.log('modal closed ');
              close();
            }}
          >
            Cerrar encuesta
          </button>
        </div>
      </div>
    )}
  </Popup>
    </>
  )
}

export default Surveys;
