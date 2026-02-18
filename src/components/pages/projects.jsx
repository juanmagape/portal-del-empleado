import {useDraggable} from '@dnd-kit/react';
import {DragDropProvider} from '@dnd-kit/react';
import {useDroppable} from '@dnd-kit/react';
import { useState } from 'react'



function Projects() {
  const [isDropped, setIsDropped] = useState(false);

  function Droppable({id, children}) {
  const {ref} = useDroppable({
    id,
  })
  return (
          <div ref={ref} style={{width: 300, height: 300, border: "1px solid black"}}>
            {children}
          </div>
  )
};

  function Draggable() {
  const {ref} = useDraggable({
    id: 'draggable',
  });
    return (
    <a ref={ref}>
      Draggable
    </a>
  );
};

  return (
    <>
      <h1>Proyectos</h1>

    <DragDropProvider
      onDragEnd={(event) => {
        if (event.canceled) return;

        const {target} = event.operation;
        setIsDropped(target?.id === 'droppable');
      }}
    >
      {!isDropped && <Draggable />}

      <Droppable id="droppable">
        {isDropped && <Draggable />}
      </Droppable>
    </DragDropProvider>
    </>
  )
}

export default Projects;
