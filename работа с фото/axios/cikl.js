navigator.geolocation.getCurrentPosition(success, error, {
    // высокая точность
    enableHighAccuracy: true
  })
  
  function success({ coords }) {
    // получаем широту и долготу
    const { latitude, longitude } = coords
    const position = [latitude, longitude]
    console.log(position) // [широта, долгота]
  }
  
  function error({ message }) {
    console.log(message) // при отказе в доступе получаем PositionError: User denied Geolocation
  <head>
    <!-- стили карты -->
    <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
        integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
        crossorigin=""
      />
      <!-- скрипт карты -->
      <script
        src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
        integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
        crossorigin=""
      ></script>
      <!-- наши стили -->
      <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <!-- контейнер для карты -->
    <div id="map"></div>
    <!-- кнопка для вызова функции -->
    <button id="my_position">My Position</button>
    <!-- наш скрипт-модуль -->
    <script src="script.js" type="module"></script>
  </body>
  // создаем локальные переменные для карты и маркера
// каждый модуль имеет собственное пространство имен
let map = null
let marker = null

// функция принимает позицию - массив с широтой и долготой
// и сообщение, отображаемое над маркером (tooltip)
export function getMap(position, tooltip) {
  // если карта не была инициализирована
  if (map === null) {
    // второй аргумент, принимаемый методом setView - это масштаб (zoom)
    map = L.map('map').setView(position, 15)
  } else return

  // что-то типа рекламы
  // без этого карта работать не будет
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map)

  // добавляем маркер с сообщением
  L.marker(position).addTo(map).bindPopup(tooltip).openPopup()
}
// импортируем функцию
import { getMap } from './map.js'

// находим кнопку и добавляем к ней обработчик
document.getElementById('my_position').onclick = () => {
  navigator.geolocation.getCurrentPosition(success, error, {
    enableHighAccuracy: true
  })
}

function success({ coords }) {
  const { latitude, longitude } = coords
  const currentPosition = [latitude, longitude]
  // вызываем функцию, передавая ей текущую позицию и сообщение
  getMap(currentPosition, 'You are here')
}

function error({ message }) {
  console.log(message)
}