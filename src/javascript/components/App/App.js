class App {
  constructor(apiFn, tableFn, loaderFn) {
    this.users = [];

    this.getUsers = apiFn;
    this.renderTable = tableFn;
    this.hideLoader = loaderFn;
  }

  // принимает функцию фильтрации
  renderFilterTable = (filterFn) => {
    // вызывает метод рендера таблицы с отфильтрованными данными
    this.renderTable(filterFn(this.users));
  }

  loadUsers = () => {
    this.getUsers()
      .then(data => {
        this.users = data.results;    // сохраняем массив пользователей
        this.renderTable(this.users); // отрисовываем таблицу
      })
      .finally(() => this.hideLoader());  // скрываем loader
  }
}

export default App;