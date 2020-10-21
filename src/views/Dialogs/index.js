import React from 'react';
import { Typography } from '@material-ui/core';
import { MoreMenuButton, Tooltip } from 'uki-react-components';
import DateTimeButton from './DateTimeButton';
import SettingsButtonDemo from './SettingsButtonDemo';

const Dialogs = () => {
  return (
    <div className="dialog-demo">
      <div className="p-16">
        <Typography variant="h6" className="mb-16">
          Menu Button
        </Typography>
        <Tooltip text="Menu button demo" classes={{ root: 'ml-16' }}>
          <MoreMenuButton
            options={[
              { key: 'open', label: 'Open' },
              { key: 'close', label: 'Close' },
              { key: 'clone', label: 'Clone' }
            ]}
            onMenuClick={console.log}
            size="small"
          />
        </Tooltip>
      </div>
      <div className="p-16">
        <Typography variant="h6" className="mb-16">
          Date picker
        </Typography>
        <DateTimeButton />
      </div>
      <div className="p-16">
        <Typography variant="h6" className="mb-16">
          Time picker
        </Typography>
        <DateTimeButton type="time" />
      </div>
      <div className="p-16">
        <Typography variant="h6" className="mb-16">
          Dialog
        </Typography>
        <SettingsButtonDemo />
      </div>
    </div>
  );
};

export default Dialogs;
