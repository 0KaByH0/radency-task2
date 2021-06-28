import React from 'react';

const TBody = (props) => {
  return <tbody {...props}>{props.children}</tbody>;
};

export default TBody;
