class App {
  constructor(apiFn, tableFn, loaderFn) {
    this.users = [];

    this.getUsers = apiFn;
    this.renderTable = tableFn;
    this.hideLoader = loaderFn;
  }

  handleFilter = (filterFn) => {
    this.renderTable(filterFn(this.users));
  }

  loadUsers = () => {
    this.getUsers()
      .then(data => {
        this.users = data.results
        this.renderTable(this.users)
      })
      .finally(() => this.hideLoader());
  }
}

export default App;