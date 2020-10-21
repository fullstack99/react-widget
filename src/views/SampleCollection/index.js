import React, { useState } from 'react';
import { Collection } from 'uki-react-components';

import NoteCard from './NoteCard';
import tableColumns from './table-columns';
import data from './mock-data';

import './SampleCollection.scss';

const SampleCollection = () => {
  const filters = [
    {
      key: 'note',
      value: 'Note',
      label: 'Note'
    },
    {
      key: 'todo',
      value: 'ToDo',
      label: 'Note'
    }
  ];
  const [selected, setSelected] = useState([]);

  return (
    <div className="sample-collection">
      <Collection
        noDataMessage="You don't have any data."
        searchPlaceholder="Search..."
        onSearch={console.log}
        createButtonTitle="Create"
        onCreate={() => console.log('create button clicked')}
        onRefresh={() => console.log('refresh button clicked')}
        data={data}
        loading={false}
        tableColumns={tableColumns}
        onTableMenuClick={console.log}
        cardViewHeaderColumn={{
          label: 'summary',
          field: 'Summary'
        }}
        onCardClick={console.log}
        pagination={{
          total: 1,
          limit: 10,
          page: 0,
          suffix: 'notes'
        }}
        onChangePage={console.log}
        onChangeRowsPerPage={console.log}
        sort={{
          col: 'category',
          dir: 'asc'
        }}
        onColumnHeaderClick={console.log}
        filters={filters}
        selectedFilter={selected}
        onFilterChange={setSelected}
        CardComponents={{
          note: NoteCard
        }}
      />
    </div>
  );
};

export default SampleCollection;
