import React from 'react';
import { Header, Table, Note } from './components';
import { AddedItem } from './components/Note';

import { useSelector, useDispatch } from 'react-redux';

import { calculate } from './redux/actions/notes';

import './App.css';

function App() {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState('');
  const [edit, setEdit] = React.useState(-1);
  const [create, setCreate] = React.useState(false);

  const notes = useSelector((state) => state.items);
  const task = useSelector((state) => state.task);
  const thought = useSelector((state) => state.thought);
  const idea = useSelector((state) => state.idea);

  React.useEffect(() => {
    dispatch(calculate());
  }, []);

  console.log(notes);
  return (
    <div className="App">
      <div className="container">
        <div className="notes-container">
          <Header main dispatch={dispatch} />
          <Table main tableClassName="main-table" bodyClassName="main-table-body">
            {notes.map((note) => {
              if (!note.archived) {
                if (note.id === edit) {
                  return <AddedItem note={note} setEdit={setEdit} />;
                }
                return <Note {...note} setEdit={setEdit} />;
              }
            })}
            {create && <AddedItem setCreate={setCreate} />}
          </Table>

          <div className="note-create">
            <button onClick={(e) => setCreate(true)} className="button-create">
              Create Note
            </button>
          </div>
          <Header />
          <Table
            onClick={(e) => setOpen('Task')}
            id="Task"
            iconImg="fa-shopping-cart"
            activeAmount={task.active}
            archivedAmount={task.archived}
            bodyClassName="body archived-items">
            {open === 'Task'
              ? notes.map((note) => note.archived && note.category === 'Task' && <Note {...note} />)
              : ''}
          </Table>
          <Table
            onClick={(e) => setOpen('Random Thought')}
            id="Random Thought"
            iconImg="fa-bookmark"
            activeAmount={thought.active}
            archivedAmount={thought.archived}
            bodyClassName="body archived-items">
            {open === 'Random Thought'
              ? notes.map(
                  (note) =>
                    note.archived && note.category === 'Random Thought' && <Note {...note} />,
                )
              : ''}
          </Table>
          <Table
            onClick={(e) => setOpen('Idea')}
            id="Idea"
            iconImg="fa-lightbulb"
            activeAmount={idea.active}
            archivedAmount={idea.archived}
            bodyClassName="body archived-items">
            {open === 'Idea'
              ? notes.map((note) => note.archived && note.category === 'Idea' && <Note {...note} />)
              : ''}
          </Table>
        </div>
      </div>
    </div>
  );
}

export default App;
