import React from 'react';
import { useDispatch } from 'react-redux';

import {
  delete_item,
  archive_item,
  unArchive_item,
  create_item,
  edit_item,
  calculate,
} from '../../redux/actions/notes';

const Note = ({ id, img, name, creationDate, category, content, dates, archived, setEdit }) => {
  const dispatch = useDispatch();

  const deleteNote = () => {
    dispatch(delete_item(id));
    dispatch(calculate());
  };
  const archiveNote = () => {
    dispatch(archive_item(id));
    dispatch(calculate());
  };
  const unArchiveNote = () => {
    dispatch(unArchive_item(id));
    dispatch(calculate());
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

export const AddedItem = ({ note, setCreate, setEdit }) => {
  const dispatch = useDispatch();
  const name = React.useRef(null);
  const date = React.useRef(null);
  const category = React.useRef(null);
  const content = React.useRef(null);

  const validateInputs = (e) => {
    console.log(e);
    e.preventDefault();
    if (
      name.current.value !== '' &&
      date.current.value !== '' &&
      category.current.value !== '' &&
      content.current.value !== ''
    ) {
      const payload = {
        id: note?.id || Date.now(),
        name: name.current.value,
        date: date.current.value,
        category: category.current.value,
        content: content.current.value,
      };

      if (!note) {
        dispatch(create_item(payload));
        setCreate(false);
      } else {
        dispatch(edit_item(payload));
        setEdit(false);
      }

      dispatch(calculate());
    } else {
      alert('Заполните все поля!!!');
    }
  };

  return (
    <tr className="note-item" id="addedItem">
      <td className="add-note" colSpan="6">
        <form id="add-form">
          <input
            ref={name}
            required
            type="text"
            id="fname2"
            defaultValue={note?.name || ''}
            name="Name"
            placeholder="Name"
            form="add-form"
          />
          <input
            ref={date}
            required
            type="date"
            id="fname1"
            defaultValue={note?.creationDate || ''}
            name="Creation date"
          />
          <select
            ref={category}
            defaultValue={note?.category || 'Task'}
            name="Category"
            id="categorySelect">
            <option defaultValue="Task">Task</option>
            <option defaultValue="Random Thought">Random Thought</option>
            <option defaultValue="Idea">Idea</option>
          </select>
          <textarea
            ref={content}
            required
            name="Content"
            id="contentArea"
            defaultValue={note?.content || ''}
            maxLength="150"
            cols="30"
            rows="2"
            placeholder="Content"
            form="add-form"></textarea>
          <div className="note-dates">{note?.dates || ''}</div>
          {!note ? (
            <div>
              <button onClick={(e) => validateInputs(e)} id="submitBtn">
                Add note
              </button>
              <button onClick={() => setCreate(false)} id="removeBtn">
                Close
              </button>
            </div>
          ) : (
            <button onClick={(e) => validateInputs(e)} id="edit">
              Confirm
            </button>
          )}
        </form>
      </td>
    </tr>
  );
};

export default Note;
