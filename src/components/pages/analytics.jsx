import { useEffect, useState } from 'react'
import { 
  Chart as ChartJS, 
  ArcElement, 
  Tooltip, 
  Legend, 
  CategoryScale, 
  LinearScale, 
  BarElement 
} from "chart.js";
import { Doughnut, Bar } from "react-chartjs-2";
import users from '../../data/users.json' 
import '../../App.css'

ChartJS.register(
  ArcElement, 
  Tooltip, 
  Legend, 
  CategoryScale, 
  LinearScale, 
  BarElement
);

function Analytics() {
  const [empleados, setEmpleados] = useState([]);

  useEffect(() => {
    async function fetchEmpleados() {
      try {
        const resEmpleado = await fetch("usersAuth.json");
        const data = await resEmpleado.json();
        
        setEmpleados(data);
      } catch (error) {
        return <h1>Error al cargar los empleados</h1>
      }
    }
    fetchEmpleados();
  }, [])

  const departamentosUnicos = [
    ...new Set(users.map(e => e.depart))
  ];

  const empleadosPorDepart = departamentosUnicos.map(dep => {
    return users.filter(e => e.depart === dep).length
  })

  let añosTotales = 0;
  let añoActual = new Date().getFullYear();

  users.forEach(e => {
    añosTotales += (añoActual - e.altaEmpresa)
  })

  
  let antiguedadMedia = 0;

  if (añosTotales > 0) {
     antiguedadMedia = añosTotales / users.length;
  }

  const añosContratacion = users.map(e => e.altaEmpresa);
  const añosUnicos = [...new Set(añosContratacion)].sort();
  const empleadosPorAño = añosUnicos.map(año => users.filter(e => e.altaEmpresa === año).length);


  const dataChart = {
    labels: departamentosUnicos,
    datasets: [
      {
        label: "Empleados",
        data: empleadosPorDepart,
        backgroundColor: ["#00cbe6", "#4a85de"],
        borderWidth: 1
      }
    ]
  }

  const optionsDoughnut = {
    cutout: "70%"
  }

  const dataBar = {
    labels: añosUnicos,
    datasets: [{
      label: "Nuevas Contrataciones",
      data: empleadosPorAño,
      backgroundColor: "#4a85de",
    }]
  };

  return (
    <>
      <h1 className='title'>Analiticas</h1>
      <div className='containerAnalytics'>
        
        <div className='cardContainer'>
          <i className='lni lni-user-multiple-4 cardIcon'></i>
          <div className='cardInfo'>
            <p className='cardValue'>{empleados.length}</p>
            <p className='cardLabel'>Empleados Totales</p>
          </div>
        </div>

        <div className='cardContainer'>
          <i className='lni lni-buildings-1 cardIcon'></i>
          <div className='cardInfo'>
            <p className='cardValue'>{departamentosUnicos.length}</p>
            <p className='cardLabel'>Departamentos</p>
          </div>
        </div>

        <div className='cardContainer'>
          <i className='lni lni-stopwatch cardIcon'></i>
          <div className='cardInfo'>
            <p className='cardValue'>{antiguedadMedia} <span className='unit'>años</span></p>
            <p className='cardLabel'>Antigüedad Media</p>
          </div>
        </div>

      </div>

    <div className='charts'>
      <div className='donut'>
        <h3>Empleados por departamento</h3>
        <Doughnut data={dataChart} options={optionsDoughnut}/>
      </div>
      
      <div className='bar' style={{ width: '40%' }}>
          <h3>Contrataciones por Año</h3>
          <Bar data={dataBar} />
      </div>
    </div>

      
    </>
  )
}

export default Analytics;
