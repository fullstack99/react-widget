import { formatTime } from 'uki-mui-components';
import TypeCell from './TypeCell';

export default [
  {
    field: 'category',
    label: 'Category',
    align: 'left',
    component: TypeCell
  },
  {
    field: 'name',
    label: 'Title',
    align: 'left'
  },
  {
    field: 'createdAt',
    label: 'Created',
    align: 'left',
    cellClass: 'text-ellipsis',
    render: row => formatTime(row.createdAt)
  }
];
