import React from 'react';
import { MainTable, SummaryTable, ArchiveTable } from '../';

import { useSelector, useDispatch } from 'react-redux';
import { calculate } from '../../redux/actions/notes';

const Content = () => {
  const dispatch = useDispatch();
  const { task, thought, idea, items } = useSelector(({ task, thought, idea, items }) => ({
    task,
    thought,
    idea,
    items,
  }));

  React.useEffect(() => {
    dispatch(calculate());
  }, [items]);

  return (
    <>
      <div className="container">
        <div className="notes-container">
          <MainTable dispatch={dispatch} notes={items} />
          <SummaryTable task={task} thought={thought} idea={idea} />
          <ArchiveTable dispatch={dispatch} notes={items} />
        </div>
      </div>
    </>
  );
};

export default Content;
