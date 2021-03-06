# Test table

Тестовое задание на вакансию Junior Frontend Developer в **STM Labs**. 

## Ссылки

[**Сайт на gh-pages**](https://andrburl2.github.io/test-table)

## Использовал в проекте:

* HTML5: семантическая верстка;
* SCSS: страница адаптирована, форма анимирована, цвет favicon меняется в зависимости от темы браузера;
* JS: ООП, основные элементы разделены на компоненты, в коде множество комментариев;
* Webpack: настроены 2 вида сборки - для разработки и для сборки, для каждой свой файл конфигурации;
* Git.

## Особенности

1. Использован **чистый JS**, никаких библиотек, помогающих реализовать функционал;
2. Настроен webpack, используются 2 конфигурации, которые наследуются от общей;
3. Использовал SCSS, добавил шрифты и favicon;
4. При наведении на фото показывается фото большего разрешения (сделал с помощью scss);
5. Во время загрузки страницы показывается **Loader**;
6. JS разделен на компоненты, api и утилиты;
7. При вводе фильтра используется декоратор **debounce**, что уменьшает количество отрисовок.