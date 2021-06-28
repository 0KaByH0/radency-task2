import React from 'react';
import { THead, TBody } from '..';

const Table = ({
  main,
  id,
  iconImg,
  activeAmount,
  archivedAmount,
  bodyClassName,
  tableClassName,
  children,
  onClick,
}) => {
  const headProps = main || { id, iconImg, activeAmount, archivedAmount };
  return (
    <>
      <table className={tableClassName || ' '}>
        {main ? false : <THead onClick={onClick} {...headProps} />}
        <TBody className={bodyClassName} id={id || ' '}>
          {children}
        </TBody>
      </table>
    </>
  );
};

export default Table;
