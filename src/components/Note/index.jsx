import React from 'react';
import { delete_item, archive_item, unArchive_item } from '../../redux/actions/notes';

const Note = ({
  id,
  img,
  name,
  creationDate,
  category,
  content,
  dates,
  archived,
  setEdit,
  dispatch,
}) => {
  const deleteNote = () => {
    dispatch(delete_item(id));
  };
  const archiveNote = () => {
    dispatch(archive_item(id));
  };
  const unArchiveNote = () => {
    return archived ? dispatch(unArchive_item(id)) : false;
  };

  return (
    <tr className={`note-item ${id}`}>
      <td className="note-info">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
          {img}
          {name}
        </div>
      </td>
      <td className="note-date-created">{creationDate}</td>
      <td className="note-category">{category}</td>
      <td className="note-text">{content}</td>
      <td className="note-dates-aditional">{dates}</td>
      <td>
        {archived ? (
          <button onClick={unArchiveNote} className="unArchive">
            Unarchive
          </button>
        ) : (
          <div className="note-header-icons">
            <i onClick={() => setEdit(id)} className="fas fa-edit"></i>
            <i onClick={archiveNote} className="fas fa-archive"></i>
            <i onClick={deleteNote} className="fas fa-trash"></i>
          </div>
        )}
      </td>
    </tr>
  );
};

export default Note;
