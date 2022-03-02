import './styles/index.scss';

// API
import randomUserApi from './api/randomUserApi';

// Таблица
import TableCell from './components/Table/TableCell';
import TableRow from './components/Table/TableRow';
import Table from './components/Table/Table';
import TABLE_DATA from './components/Table/table_data';

// Фильтрация
import Filter from './components/Filter/Filter';
import FILTER_DATA from './components/Filter/filter_data';

// Прелоудер
import Loader from './components/Loader/Loader';

// Приложение, которое соединяет это все
import App from './components/App/App';

const tableCell = new TableCell;
const tableRow = new TableRow(tableCell.create);
const table = new Table(TABLE_DATA, tableRow.create);

const loader = new Loader();

const app = new App(randomUserApi.getUsers, table.create, loader.hideLoader);

const filter = new Filter(FILTER_DATA, app.handleFilter);
filter.addEventListeners();

app.loadUsers();