import React from 'react';
import NoteIcon from '@material-ui/icons/Note';

import { formatTime } from 'uki-mui-components';

const NoteCard = ({ details }) => {
  return (
    <div className="note-card">
      <NoteIcon />
      <div className="summary">{details.name}</div>
      <div className="created">{formatTime(details.createdAt)}</div>
    </div>
  );
};

export default NoteCard;
