import { NavLink } from 'react-router-dom'
import '../index.css'

function SideBar() {

  return (
    <nav>
      <h1>
        <i className='lni lni-books-2 big-icon'></i>
        PDE
      </h1>

      <NavLink 
      to="/"
      className={({ isActive }) => isActive ? 'nav-item activo' : 'nav-item'}
      >
        <i className="lni lni-home-2 big-icon"></i>
        Anuncios
      </NavLink>
      
      <NavLink 
      to="/perfil"
      className={({ isActive }) => isActive ? 'nav-item activo' : 'nav-item'}
      >
      <i className="lni lni-user-4 big-icon"></i>
      Perfil
      </NavLink>
      
      <NavLink 
      to="/ausencias"
      className={({ isActive }) => isActive ? 'nav-item activo' : 'nav-item'}
      >
      <i className="lni lni-calendar-days big-icon"></i>
      Ausencias
      </NavLink>
      
      <NavLink 
      to="/documentos"
      className={({ isActive }) => isActive ? 'nav-item activo' : 'nav-item'}
      >
      <i className="lni lni-folder-1 big-icon"></i>
      Documentos
      </NavLink>
      
      <NavLink 
      to="/proyectos"
      className={({ isActive }) => isActive ? 'nav-item activo' : 'nav-item'}
      >
      <i className="lni lni-check-circle-1 big-icon"></i>
      Proyectos
      </NavLink>
      
      <NavLink 
      to="/encuestas"
      className={({ isActive }) => isActive ? 'nav-item activo' : 'nav-item'}
      >
      <i className="lni lni-box-archive-1 big-icon"></i>
      Encuestas
      </NavLink>
      
      <NavLink 
      to="/analiticas"
      className={({ isActive }) => isActive ? 'nav-item activo' : 'nav-item'}
      >
      <i className="lni lni-bar-chart-4 big-icon"></i>
      Analíticas
      </NavLink>

      <NavLink 
      to="/logout"
      className={({ isActive }) => isActive ? 'nav-item activo' : 'nav-item'}
      >
      <i className="lni lni-exit big-icon"></i>
      Salir
      </NavLink>
    </nav>
  )
}

export default SideBar;
