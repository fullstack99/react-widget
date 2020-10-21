import React from 'react';
import PropTypes from 'prop-types';

import NoteIcon from '@material-ui/icons/Note';
import AssignmentIcon from '@material-ui/icons/Assignment';

import './TypeCell.scss';

const TypeCell = ({ row, onAction }) => {
  const handleClick = () => {
    onAction(row);
  };

  if (row.type === 'note') {
    return (
      <div className="type-cell" onClick={handleClick}>
        <NoteIcon /> Note
      </div>
    );
  } else if (row.type === 'todo') {
      return (
        <div className="type-cell" onClick={handleClick}>
          <AssignmentIcon /> Todo
        </div>
      )
  }

  return null;
};

TypeCell.propTypes = {
  row: PropTypes.shape({
    type: PropTypes.string.isRequired,
  }).isRequired,
  onAction: PropTypes.func,
};

export default TypeCell;
