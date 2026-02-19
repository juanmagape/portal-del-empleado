import {useDraggable} from '@dnd-kit/react';
import {DragDropProvider} from '@dnd-kit/react';
import {useDroppable} from '@dnd-kit/react';
import { useState, useEffect } from 'react'
import '../styles/projects.css'

const columns = ["todo", "in-progress", "done"];

function Draggable({ id, title }) {
  const { ref } = useDraggable({ id });

  return (
    <div ref={ref} className="draggable">
      {title}
    </div>
  );
}

function Droppable({ id, children }) {
  const { ref } = useDroppable({ id });

  return (
    <div ref={ref} className="droppable">
      <h3>{id}</h3>
      {children}
    </div>
  );
}

function Projects() {

const [items, setItems] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch('/project.json');
        const data = await response.json();
        setItems(data);
      } catch (err) {
        setError('Error al cargar las tareas');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

return (
  <>
    <h1>Proyectos</h1>
    <div className="containers">
      <DragDropProvider
        onDragEnd={(event) => {
          if (event.canceled) return;
          const { source, target } = event.operation;
          setItems((prev) =>
            prev.map((item) =>
              item.id === source.id
                ? { ...item, column: target?.id || null }
                : item
            )
          );
        }}
      >
        {columns.map((col) => (
          <Droppable key={col} id={col}>
            {items
              .filter((item) => item.column === col)
              .map((item) => (
                <Draggable key={item.id} id={item.id} title={item.title} />
              ))}
          </Droppable>
        ))}

      </DragDropProvider>
    </div>
  </>
);
}

export default Projects