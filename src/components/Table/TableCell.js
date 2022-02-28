class TableCell {
  create = (cellData) => {
    const tableCell = document.createElement('td');
    tableCell.classList.add('table__cell');

    // если данные будут объектом и содержать свойство thumbnail,
    // то вызываем фунцию по вставке img
    if (cellData.thumbnail) {
      this._insertImages(tableCell, cellData);
    } else {
      tableCell.textContent = cellData;
    }

    return tableCell;
  }

  _insertImages(parentElement, imgData) {
    // перебираем объект и для каждого свойства создаем img
    for (let key in imgData) {
      const img = document.createElement('img');                 // создаем img
      img.classList.add('table__img',`table__img_size_${key}`);  // добавляем классы table__img и table__img_size_${модификатор} - (thumbnail или large)
      img.setAttribute('src', imgData[key]);                     // устанавливаем атрибут src
      img.setAttribute('alt', 'random photo of a person');       // устанавливаем атрибут alt

      parentElement.append(img);
    }
  }
}

export default TableCell;