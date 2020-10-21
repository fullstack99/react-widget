import React, { useState } from 'react';
import { Typography } from '@material-ui/core';
import {
  InputField,
  SelectField,
  AutoComplete,
  ChipSelector,
  MultipleChoice,
  SingleChoice,
  SwitchField,
  ButtonGroup,
  RichTextField,
  HtmlRenderer
} from 'uki-react-components';
import { getTarget } from 'uki-mui-components';

const FormControls = () => {
  const [browser, setBrowser] = useState('');
  const [inputVal, setInputVal] = useState('');
  const [user, setUser] = useState('');
  const [notification, setNotification] = useState([]);
  const [mlChoice, setMlChoice] = useState([]);
  const [choice, setChoice] = useState('');
  const [enabled, setEnabled] = useState(false);
  const [test, setTest] = useState('');
  const [html, setHtml] = React.useState('');

  return (
    <div className="form-controls">
      <div className="p-16">
        <Typography variant="h6" className="mb-16">
          Input Fields
        </Typography>
        <InputField
          className="mb-16"
          value={inputVal}
          onChange={ev => {
            const target = getTarget(ev);
            setInputVal(target.value);
          }}
          label="Input Field"
          required
        />
        <InputField
          value={inputVal}
          onChange={ev => {
            const target = getTarget(ev);
            setInputVal(target.value);
          }}
          label="Input Field"
          required
          hasBottomBorder
        />
      </div>
      <div className="p-16">
        <Typography variant="h6" className="mb-16">
          Select Fields
        </Typography>
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
        <SelectField
          className="mt-16"
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
        />
      </div>
      <div className="p-16">
        <Typography variant="h6" className="mb-16">
          Auto complete field
        </Typography>
        <AutoComplete
          label="User"
          value={user}
          onChange={val => setUser(val)}
          options={[
            { value: 1, label: 'Andrew' },
            { value: 2, label: 'James' },
            { value: 3, label: 'Carrington' }
          ]}
          required
        />
      </div>
      <div className="p-16">
        <Typography variant="h6" className="mb-16">
          Chip selector
        </Typography>
        <ChipSelector
          label="Notification"
          value={notification}
          onChange={setNotification}
          options={['Email', 'Platform', 'Phone']}
          required
        />
      </div>
      <div className="p-16">
        <Typography variant="h6" className="mb-16">
          Multiple choice
        </Typography>
        <MultipleChoice
          label="Multiple Choice"
          value={mlChoice}
          onChange={setMlChoice}
          options={['Option 1', 'Option 2', 'Option 3']}
          required
        />
      </div>
      <div className="p-16">
        <Typography variant="h6" className="mb-16">
          Single choice
        </Typography>
        <SingleChoice
          label="Single Choice"
          value={choice}
          onChange={setChoice}
          options={['Option 1', 'Option 2', 'Option 3']}
          required
        />
      </div>
      <div className="p-16">
        <Typography variant="h6" className="mb-16">
          Switch
        </Typography>
        <SwitchField
          label="Enabled"
          value={enabled}
          onChange={setEnabled}
          required
        />
      </div>
      <div className="p-16">
        <Typography variant="h6" className="mb-16">
          Button group
        </Typography>
        <ButtonGroup
          label="Select Test"
          value={test}
          onChange={setTest}
          options={['Test A', 'Test B', 'Test C']}
          required
        />
      </div>
      <div className="p-16">
        <Typography variant="h6" className="mb-16">
          Html editor
        </Typography>
        <HtmlRenderer html={html} />
        <RichTextField
          label="Rich text field"
          value={html}
          onChange={setHtml}
          required
          hasBottomBorder
        />
      </div>
    </div>
  );
};

export default FormControls;
