import React from 'react';

import { Header, Table, Note } from '..';

const ArchiveTable = ({ notes, dispatch }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Header archive open={open} setOpen={() => setOpen((prev) => !prev)} />
      <Table main tableClassName="main-table" bodyClassName="main-table-body">
        {open &&
          notes.map((note) => {
            if (note.archived) {
              return <Note {...note} dispatch={dispatch} />;
            }
          })}
      </Table>
    </>
  );
};

export default ArchiveTable;
