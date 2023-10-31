# E2E Тесты для Front-End'а Apteki.ua
Интеграционные тесты с использованием [Cypress](https://docs.cypress.io/guides/end-to-end-testing/writing-your-first-end-to-end-test)


## Установка

```bash
# устанавливаем зависимости
$ npm install
```

## Запуск

**запускаем тесты "визуально"**
```bash
$ npx cypress open
```

**запускаем тесты в "пакетном" режиме**
```bash
$ npx cypress run
```

## Файлы и папки

### `/cypress/e2e`
В этой папке находятся тесты, которые обрабатывает Cypress.

### `/cypress/examples`
В этой папке находятся примеры тестов.

### `/cypress.config.js`
Это главный конфиг Cypress'а.
Чтобы "натравить" Cypress на другую нашу площадку измените параметр `baseUrl` нужный Вам. 
```javascript
baseUrl: 'http://localhost:2405/'
```
По умолчанию указано на локальный DEV-сервер.

_DEV-сервер должен быть запущен перед запуском Cypress'а._
