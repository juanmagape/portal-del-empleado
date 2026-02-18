import {useDraggable} from '@dnd-kit/react';
import {DragDropProvider} from '@dnd-kit/react';
import {useDroppable} from '@dnd-kit/react';
import { useState } from 'react'
import '../styles/projects.css'

function Projects() {

  const [parent, setParent] = useState(null);

  function Droppable({ id, children }) {
    const { ref } = useDroppable({ id });

    return (
      <div ref={ref} className="droppable">
        {children}
      </div>
    );
  }

  function Draggable() {
    const { ref } = useDraggable({ id: "draggable" });

    return (
      <div ref={ref} className="draggable">
        Draggable
      </div>
    );
  }

  return (
    <>
      <h1>Proyectos</h1>
      <div className='containers'>

      <DragDropProvider
        onDragEnd={(event) => {
          if (event.canceled) return;

          const { target } = event.operation;
          setParent(target?.id || null);
        }}
      >

        {parent === null && <Draggable />}

        <Droppable id="todo">
          {parent === "todo" && <Draggable />}
        </Droppable>

        <Droppable id="in-progress">
          {parent === "in-progress" && <Draggable />}
        </Droppable>

        <Droppable id="done">
          {parent === "done" && <Draggable />}
        </Droppable>

      </DragDropProvider>
    </div>

    </>
  );
}

export default Projects