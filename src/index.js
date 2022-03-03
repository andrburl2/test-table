import './styles/index.scss';

// API и utils
import randomUserApi from './javascript/api/randomUserApi';
import debounce from './javascript/utils/debounce';

// Таблица
import TableCell from './javascript/components/Table/TableCell';
import TableRow from './javascript/components/Table/TableRow';
import Table from './javascript/components/Table/Table';
import TABLE_DATA from './javascript/components/Table/table_data';

// Фильтрация
import Filter from './javascript/components/Filter/Filter';
import FILTER_DATA from './javascript/components/Filter/filter_data';

// Прелоудер
import Loader from './javascript/components/Loader/Loader';

// Компонент приложения, который соединяет это все
import App from './javascript/components/App/App';

const tableCell = new TableCell;
const tableRow = new TableRow(tableCell.create);      // принимает функцию создания ячейки
const table = new Table(TABLE_DATA, tableRow.create); // принимает данные таблицы и функцию создания строки

const loader = new Loader();

// принимает функции получения пользователей, создания таблицы и управления лоадером
const app = new App(randomUserApi.getUsers, table.create, loader.hideLoader);

const filter = new Filter(FILTER_DATA, app.renderFilterTable); // принимает данные фильтра и функцию рендера таблицы из app
filter.handleFilter = debounce(filter.handleFilter, 200);      // используем декратор на функцию фильтрации
filter.addEventListeners();                                    // устанавливаем обработчики событий

app.loadUsers();