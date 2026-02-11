import { useState } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'moment/locale/es'
import 'react-big-calendar/lib/css/react-big-calendar.css'

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
  
  // Solo necesitamos controlar la fecha, la vista ya no cambiará
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
    <div style={{ height: '85vh', padding: '20px' }}>
      <h1>Gestión de Ausencias</h1>
      <p style={{fontSize: '0.9em', color: 'gray', marginBottom: '20px'}}>
         * Haz clic o arrastra en los días para añadir ausencia.
      </p>
      
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
        
        // --- CAMBIOS CLAVE ---
        views={['month']}   // 1. Limitamos las vistas solo a "Mes" (esto quita los botones)
        defaultView='month' // 2. Vista por defecto
        date={date}         // 3. Controlamos la fecha
        onNavigate={onNavigate} // 4. Permitimos navegar entre meses
      />
    </div>
  )
}

export default Absences;