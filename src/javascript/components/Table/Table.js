class Table {
  constructor(tableData, tableRowFn) {
    this.tableContainer = tableData.body;
    this.errorText = tableData.errorText;

    this.createTableRow = tableRowFn;
  }

  create = (usersData) => {
    while (this.tableContainer.firstChild) {
      this.tableContainer.removeChild(this.tableContainer.firstChild);
    }

    if (usersData === 'Ничего не найдено') {
      this.errorText.textContent = usersData;
    } else {
      this.errorText.textContent = '';

      usersData.forEach(el => {
        // для каждого пользователя создаем ряд, в который передаем массив для создания ячеек с нужными даннными
        this.tableContainer.append(
          this.createTableRow([
            `${el.name.first} ${el.name.last}`,
            {
              thumbnail: el.picture.thumbnail,
              large: el.picture.large
            },
            `${el.location.state}, ${el.location.city}`,
            el.email,
            el.phone,
            new Date(el.registered.date).toLocaleDateString('ru-RU'),
          ])
        )
      })
    }
  }
}

export default Table;