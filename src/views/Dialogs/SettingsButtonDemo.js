import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import {
  Dialog,
  SelectField,
  InputField,
  Tooltip
} from 'uki-react-components';
import { getTarget } from 'uki-mui-components';

const SettingsButton = () => {
  const [open, setOpen] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [browser, setBrowser] = useState('');

  return (
    <>
      <Tooltip text="Open settings" classes={{ root: 'mr-16' }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            setOpen(true);
          }}
          startIcon={<SettingsIcon />}
        >
          Settings
        </Button>
      </Tooltip>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        title="Settings"
        onAction={menu => console.log(menu)}
        actions={[
          { type: 'close', label: 'Cancel' },
          { type: 'primary', label: 'Save' }
        ]}
        contained
      >
        <div className="mb-16">Settings content</div>
        <InputField
          className="mb-16"
          value={inputVal}
          onChange={ev => {
            const target = getTarget(ev);
            setInputVal(target.value);
          }}
          label="Input Field"
          required
          hasBottomBorder
        />
        <SelectField
          label="Default Browser"
          value={browser}
          onChange={val => setBrowser(val)}
          options={[
            { value: '', label: 'None' },
            { value: 'chrome', label: 'Google Chrome' },
            { value: 'mozilla', label: 'Firefox' },
            { value: 'safari', label: 'Safari' }
          ]}
          FormControlProps={{
            fullWidth: true,
            required: true
          }}
          hasBottomBorder
        />
      </Dialog>
    </>
  );
};

export default SettingsButton;
