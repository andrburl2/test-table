class TableRow {
  constructor(fn) {
    this.createTableCell = fn;
  }

  create = (userData) => {
    const tr = document.createElement('tr');
    tr.classList.add('table__row');

    this._insertCells(tr, userData);

    return tr;
  }

  _insertCells(tr, data) {
    // перебираем data и за каждый элемент создаем TableCell с переданными данными
    data.forEach(el => {
      tr.append(this.createTableCell(el));
    });
  }
}

export default TableRow;