import './styles/index.scss';

import api from './components/api';
import TableCell from './components/Table/TableCell';
import TableRow from './components/Table/TableRow';
import Table from './components/Table/Table';

const tableCell = new TableCell;
const tableRow = new TableRow(tableCell.create);
const table = new Table(document.querySelector('.table'), tableRow.create);

api.getUsers()
  .then(data => table.create(data.results));