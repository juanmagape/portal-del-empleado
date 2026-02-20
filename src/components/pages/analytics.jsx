import { useEffect, useState } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import users from '../../data/users.json' 

ChartJS.register(ArcElement, Tooltip, Legend);


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


  const dataChart = {
    labels: departamentosUnicos,
    datasets: [
      {
        label: "Empleados",
        data: empleadosPorDepart,
        backgroundColor: ["#f87171", "#4ade80"],
        borderWidth: 1
      }
    ]
  }

  return (
    <>
      <h1>Analiticas</h1>

      Cantidad de empleados: 
      {empleados.length}

      <Doughnut data={dataChart} />
    </>
  )
}

export default Analytics;
