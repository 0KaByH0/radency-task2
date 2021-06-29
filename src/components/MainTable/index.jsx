import React from 'react';
import { Header, Table, Note, AddedNote } from '..';

import '../../App.css';

const MainTable = ({ dispatch, notes }) => {
  const [edit, setEdit] = React.useState(-1);
  const [create, setCreate] = React.useState(false);

  return (
    <>
      <Header main dispatch={dispatch} />
      <Table main tableClassName="main-table" bodyClassName="main-table-body">
        {notes.map((note) => {
          if (!note.archived) {
            if (note.id === edit) {
              return <AddedNote note={note} setEdit={setEdit} dispatch={dispatch} />;
            }
            return <Note {...note} setEdit={setEdit} dispatch={dispatch} />;
          }
        })}
        {create && <AddedNote setCreate={setCreate} dispatch={dispatch} />}
      </Table>
      <div className="note-create">
        <button onClick={() => setCreate(true)} className="button-create">
          Create Note
        </button>
      </div>
    </>
  );
};

export default MainTable;
