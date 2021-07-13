# "GameBlast" игра по мотивам популярных blast-games

Мой pet-проект.

## О приложениии

Демо-версия на [GameBlast](https://kostyanb.github.io/gameBlastDemo/).

* Процесс игры заключается в "сжигании" заданного количества "тайтлов" за заданное количество ходов
* При наборе заданного количества очков пользователю выводится сообщение
* При исчерпании запаса ходов игровое поле блокирутся и игрок уведомляется об этом
* Размеры игрового поля устанавливаются автоматически в зависимости от заданных игроком параметров


## Настройки приложения

Пользовательские начальные установки игры

* ширина поля fieldColumns = 4
* высота поля fieldLines = 6
* количество цветов titlesColorQuantity = 3

Дополнительно в файле db/db.json задаются настройки игры:

* minWidth - минимальное количество тайтлов по ширине (4)
* maxWidth - максимальное количество тайтлов по ширине (15)
* minHeight - минимальное количество тайтлов по высоте (4)
* maxHeight - максимальное количество тайтлов по высоте (15)
* minColor - минимальное количество цветов (2)
* maxColor - максимальное количество цветов (5)
* blastDelay - задержка ms blast-эффекта (1000 ms)
* minBlastQuantity - минимальное количество сжигаемых тайтлов (3)
* maxTryCount - максимальное количество ходов (20)
* winCount - набрать очков для победы (100)

## Стек технологий

* Модульная структура скриптов;
* ООП + функциональный подход;
* Сборка webpack;
* Чтение настроек с сервера fetch-api;

## Как запустить

* Скопировать репозитория в рабочую директорию
* Задать настройки в файле db/db.json
* В консоли "npm install", "npm run build"
* Содержимое папки build захостить на сервер

***
Eng
## "GameBlast" a game based on the popular blast-games

My pet-project

## About App

Demo [GameBlast](https://kostyanb.github.io/gameBlastDemo/).

* The game process consists in "blasting" a given number of "titles" for given number of moves
* When given number of points is collected, a message is displayed to the user
* When stock of moves is exhausted, playing field is blocked and player is notified about it
* The dimensions of playing field are set automatically depending on parameters set by player

## Application settings

### Initial default settings

* field width fieldColumns = 4
* fieldLines height = 6
* number of colors titlesColorQuantity = 3

### User settings set in src/db/db.json file

* minWidth - minimum number of titles in width (4)
* maxWidth - maximum number of titles in width (15)
* minHeight - minimum number of titles in height (4)
* maxHeight - maximum number of titles in height (15)
* minColor - minimum number of colors (2)
* maxColor - maximum number of colors (5)
* blastDelay - delay of blast effect (1000 ms)
* minBlastQuantity - the minimum number of titles to blast (3)
* maxTryCount - maximum number of moves (20)
* winCount - score points to win (100)

## Technology stack

* Modular structure of scripts;
* Solid + functional approach;
* Build webpack;
* Read user settings from fetch-api server;

## How to start

* Copy repository to working directory
* Set  game-settings in db/db.json file
* In console run "npm install", "npm run build"
* Host the contents of  "build" folder on server