import React from 'react';
import { Header, Table } from '..';

import '../../App.css';

const SummaryTable = ({ task, thought, idea }) => {
  return (
    <>
      <Header />
      <Table
        id="Task"
        iconImg="fa-shopping-cart"
        activeAmount={task.active}
        archivedAmount={task.archived}
        bodyClassName="body archived-items"></Table>
      <Table
        id="Random Thought"
        iconImg="fa-bookmark"
        activeAmount={thought.active}
        archivedAmount={thought.archived}
        bodyClassName="body archived-items"></Table>
      <Table
        id="Idea"
        iconImg="fa-lightbulb"
        activeAmount={idea.active}
        archivedAmount={idea.archived}
        bodyClassName="body archived-items"></Table>
    </>
  );
};

export default SummaryTable;
