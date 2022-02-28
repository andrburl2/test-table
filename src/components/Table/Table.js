class Table {
  constructor(domElement, fn) {
    this.tableContainer = domElement;
    this.createTableRow = fn;
  }

  create = (usersData) => {
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

export default Table;