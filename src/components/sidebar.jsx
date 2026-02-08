import { NavLink } from 'react-router-dom'
import '../index.css'

function SideBar() {

  return (
    <nav>
      <NavLink to="/">
        <i className="lni lni-home-2 big-icon"></i>
        Anuncios
      </NavLink>
      
      <NavLink to="/perfil">
      <i className="lni lni-user-4 big-icon"></i>
      Perfil
      </NavLink>
      
      <NavLink to="/ausencias">
      <i className="lni lni-calendar-days big-icon"></i>
      Ausencias
      </NavLink>
      
      <NavLink to="/documentos">
      <i className="lni lni-folder-1 big-icon"></i>
      Documentos
      </NavLink>
      
      <NavLink to="/proyectos">
      <i className="lni lni-check-circle-1 big-icon"></i>
      Proyectos
      </NavLink>
      
      <NavLink to="/encuestas">
      <i className="lni lni-box-archive-1 big-icon"></i>
      Encuestas
      </NavLink>
      
      <NavLink to="/analiticas">
      <i className="lni lni-bar-chart-4 big-icon"></i>
      Analíticas
      </NavLink>

      <NavLink to="/logout">
      <i className="lni lni-exit big-icon"></i>
      Salir
      </NavLink>
    </nav>
  )
}

export default SideBar;
