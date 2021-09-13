Версия NodeJS 14.17.1

Пакетный менеджер Yarn

запуск eslint:
```shell
$ yarn lint
yarn run v1.22.5
$ eslint --ext ".js" --ignore-path .gitignore .
Done in 0.50s.
```

Задание 2

Help:
```shell
$ yarn start --help
yarn run v1.22.5
$ node index.js --help
Usage: $ yarn start -c [city name]

Options:
      --help     Show help                                             [boolean]
      --version  Show version number                                   [boolean]
  -c, --city     the name of the city to get the weather
Done in 0.20s.

```
Запуск:

```shell
$ yarn start -c Москва
yarn run v1.22.5
$ node index.js -c Москва
Страна: Россия
Город: Москва
-------------------------------
Температура: 18°
Скорость ветра: 26км/ч
Done in 0.86s.

```
Ошибки:

```shell
$ yarn start -c
yarn run v1.22.5
$ node index.js -c
город не задан
Done in 0.19s.

$ yarn start
yarn run v1.22.5
$ node index.js
город не задан
Done in 0.18s.

$ yarn start -c бобруйск
yarn run v1.22.5
$ node index.js -c бобруйск
Город не найден
Done in 0.76s.
```
