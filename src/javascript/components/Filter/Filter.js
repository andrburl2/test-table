class Filter {
  constructor(filterForm, appFn) {
    this.form = filterForm;
    this.filter = '';

    this.renderTable = appFn;
  }

  filterArray = (array) => {
    // фильтруем полученный массив с помощью регулярного выражения
    const filteredArray = array.filter(el => {
      // создаем регулярку с введенными данными
      const regexp = new RegExp(`^${this.filter}`, 'i');

      // возвращаем  элемент, если в имени или фамилии есть совпадение
      if (el.name.first.match(regexp) || el.name.last.match(regexp)) {
        return el
      }
    });

    return filteredArray.length > 0 ? filteredArray : 'Ничего не найдено'
  }

  toggleButton = () => {
    // если в поле ничего не введено, то кнопка "очистить" блокируется
    if (this.filter.length > 0) {
      this.form.querySelector('.filter__button').disabled = false;
    } else {
      this.form.querySelector('.filter__button').disabled = true;
    }
  }

  handleFilter = (event) => {
    if (event.type === 'reset') {
      this.filter = '';
    } else {
      this.filter = event.target.value;
    }

    // переключаем кнопку
    this.toggleButton();
    // передаем функцию фильтрации массива
    this.renderTable(this.filterArray);
  }

  handleSubmit = (event) => {
    // отменяем действие по умолчанию при submit формы
    event.preventDefault();
  }

  addEventListeners() {
    this.form.inputFilter.addEventListener('input', this.handleFilter);
    this.form.addEventListener('reset', this.handleFilter);
    this.form.addEventListener('submit', this.handleSubmit);
  }
}

export default Filter;