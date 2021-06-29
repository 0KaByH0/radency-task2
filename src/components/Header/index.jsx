import React from 'react';

import { delete_all, archive_all, calculate } from '../../redux/actions/notes';

const Header = ({ main, archive, dispatch, setOpen, open }) => {
  const deleteAll = () => {
    if (window.confirm('Are you sure you want to archive all notes?')) {
      dispatch(delete_all());
      dispatch(calculate());
    }
  };
  const archiveAll = () => {
    dispatch(archive_all());
    dispatch(calculate());
  };

  if (main) {
    return (
      <header className="header-list main">
        <span className="note-info">Name</span>
        <span className="note-date-created">Created</span>
        <span className="note-category">Category</span>
        <span className="note-text">Content</span>
        <span className="note-dates-aditional">Dates</span>
        <span>
          <div className="note-header-icons">
            <i onClick={archiveAll} className="fas fa-archive"></i>
            <i onClick={deleteAll} className="fas fa-trash"></i>
          </div>
        </span>
      </header>
    );
  } else if (archive) {
    return (
      <header className="header-list main">
        <span className="note-info">Name</span>
        <span className="note-date-created">Created</span>
        <span className="note-category">Category</span>
        <span className="note-text">Content</span>
        <span className="note-dates-aditional">Dates</span>
        <span>
          <button onClick={setOpen}> {open ? 'Close Archive' : 'See Archived'}</button>
        </span>
      </header>
    );
  } else {
    return (
      <header className="header-list">
        <span className="note-archived-category">Category</span>
        <span className="note-active">Active</span>
        <span className="note-archived">Archived</span>
      </header>
    );
  }
};

export default Header;
