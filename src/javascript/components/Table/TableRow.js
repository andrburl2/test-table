class TableRow {
  constructor(tableCellFn) {
    this.createTableCell = tableCellFn;
  }

  create = (userData) => {
    const tr = document.createElement('tr');
    tr.classList.add('table__row');

    this.insertCells(tr, userData);

    return tr;
  }

  insertCells(tr, data) {
    // перебираем data и за каждый элемент создаем TableCell с переданными данными
    data.forEach(el => {
      tr.append(this.createTableCell(el));
    });
  }
}

export default TableRow;