import React from 'react';

import { delete_all, archive_all, calculate } from '../../redux/actions/notes';

const Header = ({ main, dispatch }) => {
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

  return main ? (
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
  ) : (
    <header className="header-list">
      <span className="note-archived-category">Category</span>
      <span className="note-active">Active</span>
      <span className="note-archived">Archived</span>
    </header>
  );
};

export default Header;

{
  /* <thead>
              <tr className="header-list">
                <td className="note-info">Name</td>
                <td className="note-date-created">Created</td>
                <td className="note-category">Category</td>
                <td className="note-text">Content</td>
                <td className="note-dates-aditional">Dates</td>
                <td>
                  <div className="note-header-icons">
                    <i className="fas fa-archive"></i>
                    <i className="fas fa-trash"></i>
                  </div>
                </td>
              </tr>
            </thead> */
}
