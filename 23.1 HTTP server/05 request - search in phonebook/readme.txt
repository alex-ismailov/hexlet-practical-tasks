index.js
Реализуйте логику парсинга файла phonebook.txt в следующий формат:

{
  <id>: {
    name: <name>,
    phone: <phone>,
  },
  <id>: {
    name: <name>,
    phone: <phone>,
  },
}
Где <id> - это идентификатор конкретной записи,
а <name> и <phone> – это имя и телефон соответствующей записи.
----------------------------------------------------------------------------------

server.js
Сервер позволяет выполнять запросы на поиск всех записей, соответствующих критерию
поиска. Критерием является часть имени/фамилии, по которой производится сопоставление.

В запросе к серверу по ссылке /search необходимо передать один параметр: q,
значением которого, будет подстрока.
В случае, если найдены сопоставления, то сервер возвращает данные в
следующем формате (для подстроки miss):

Miss Arlo Barrows, 328-949-3924
Miss Bernadette Conn, 249.059.5515
Miss Savannah Dicki, 157.463.3368
Miss Rudy Brown, 779-703-0150`
Обратите внимание, что регистр при сопоставлении не учитывается.

В случае если запрос к серверу выполняется без параметров или соответствий не найдено,
он должен вернуть пустую строку.

$ curl localhost:8080/search

$ curl localhost:8080/search?q=mrs
Mrs. Rosalia Wisoky, (865) 611-8960
Mrs. Earl Gaylord, 944-345-3158
Mrs. Roslyn Moen, 526.643.3627
Mrs. Giovani Rempel, 842-246-9417
----------------------------------------------------------------------------------

Flow
Кроме запуска тестов, обязательно попробуйте "поиграть" с написанным сервером.
Для этого воспользуйтесь командой make start, которая запускает ваш сервер.
После этого вы можете делать к нему запросы, используя, например, curl:
curl localhost:8080. В данном уроке сервер перезапускается автоматически.
