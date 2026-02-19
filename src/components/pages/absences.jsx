import { useState } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'moment/locale/es'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import '../../App.css'

moment.locale('es');
const localizer = momentLocalizer(moment)

const eventosIniciales = [
  {
    title: 'Vacaciones Verano',
    start: new Date(2025, 6, 15),
    end: new Date(2025, 6, 30),
    resource: 'vacaciones'
  }
]

function Absences() {
  const [misEventos, setMisEventos] = useState(eventosIniciales);
  
  const [date, setDate] = useState(new Date()); 

  const handleSelectSlot = ({ start, end }) => {
    const titulo = window.prompt('¿Motivo?');
    if (titulo) {
      setMisEventos([...misEventos, { title: titulo, start, end, resource: 'ausencia' }]);
    }
  };

  const onNavigate = (newDate) => setDate(newDate);

  const eventStyleGetter = (event) => {
    let backgroundColor = event.resource === 'vacaciones' ? '#28a745' : '#dc3545';
    return { style: { backgroundColor, color: 'white', borderRadius: '5px' } };
  };

  return (
      <>
      <h1 className='title'>Gestión de Ausencias</h1>
    <div style={{ height: '85vh', padding: '20px' }}>
      
      <Calendar
        localizer={localizer}
        events={misEventos}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '100%' }}
        messages={{
            next: "Siguiente", previous: "Anterior", today: "Hoy",
            month: "Mes", week: "Semana", day: "Día"
        }}
        eventPropGetter={eventStyleGetter}
        selectable={true}
        onSelectSlot={handleSelectSlot}
        
        views={['month']} 
        defaultView='month'
        date={date}         
        onNavigate={onNavigate} 
      />
    </div>
    </>
  )
}

export default Absences;