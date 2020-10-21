import React from 'react';
import { Header } from 'uki-react-components';
import { useHistory } from 'react-router-dom';

const MainHeader = ({ tab }) => {
  const history = useHistory();

  const handleTabChange = tab => {
    switch (tab) {
      case 0:
        history.push('/form-controls');
        break;
      case 1:
        history.push('/collection');
        break;
      case 2:
        history.push('/dialogs');
        break;
      case 3:
        history.push('/resources');
        break;
      default:
        break;
    }
  };

  return (
    <Header
      title="Widget Boilerplate"
      menus={[
        { key: 'create', label: 'Create' },
        { key: 'update', label: 'Update' },
        { key: 'delete', label: 'Delete' }
      ]}
      onMenuClick={console.log}
      tabs={['Form controls', 'Collection', 'Dialogs', 'Resources']}
      selectedTab={tab}
      onTabChange={handleTabChange}
      onBack={() => {
        history.goBack();
      }}
    />
  );
};

export default MainHeader;
