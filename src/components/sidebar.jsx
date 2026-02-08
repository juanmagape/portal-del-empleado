import { NavLink } from 'react-router-dom'

function SideBar() {

  return (
    <>
      <NavLink to="/">Anuncios</NavLink>
      <NavLink to="/perfil">Perfil</NavLink>
      <NavLink to="/ausencias">Ausencias</NavLink>
      <NavLink to="/documentos">Documentos</NavLink>
      <NavLink to="/proyectos">Proyectos</NavLink>
      <NavLink to="/encuestas">Encuestas</NavLink>
      <NavLink to="/analiticas">Analíticas</NavLink>
    </>
  )
}

export default SideBar;
