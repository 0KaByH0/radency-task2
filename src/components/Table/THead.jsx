import React from 'react';

const THead = (props) => {
  return (
    <thead onClick={props.onClick} className="head note-item btn" id={`${props.id}`}>
      <tr>
        <td colSpan="2">
          <i className={`fas ${props.iconImg}`}></i>
          {props.id}
        </td>
        <td colSpan="2">
          <span className={`active`}>{props.activeAmount || '-'}</span>
        </td>
        <td colSpan="1">
          <span className={`archived`}>{props.archivedAmount || '-'}</span>
        </td>
        <td colSpan="1">
          <i></i>
        </td>
      </tr>
    </thead>
  );
};

export default THead;
