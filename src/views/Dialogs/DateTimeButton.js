import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { Tooltip } from 'uki-react-components';
import { DateTimePickerDialog } from 'uki-mui-components';

const DateTimeButton = ({ type }) => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());

  return (
    <>
      <Tooltip text="Open date picker dialog">
        <Button
          variant="contained"
          color="primary"
          onClick={() => setOpen(true)}
        >
          {type === 'time' ? 'Open Time Picker' : 'Open Date Picker'}
        </Button>
      </Tooltip>
      <DateTimePickerDialog
        open={open}
        onClose={() => setOpen(false)}
        date={date}
        onChange={d => {
          setDate(d);
        }}
        openTo="date"
        ampm
        views={
          type === 'time'
            ? ['hours', 'minutes', 'seconds']
            : ['year', 'month', 'date']
        }
        contained
      />
    </>
  );
};

export default DateTimeButton;
